import logging
import os

from osgeo import gdal

logger = logging.getLogger(__name__)

class FileParser:
    def __init__(self, variable_LUT, product_LUT, level_LUT):
        self.variable_LUT = variable_LUT
        self.product_LUT = product_LUT
        self.level_LUT = level_LUT
        # GDAL configuration options
        gdal.SetConfigOption('GRIB_NORMALIZE_UNITS', 'NO')

    def parse_metadata(self, files, directory, model):
        '''
        Open GRIB2 or NetCDF files and read their metadata.
        Generate tables in english and french from metadata.
        
            Parameters:
                files ([str]): GRIB2 or NetCDF files.
                directory (str): Directory in which files will be written
                model (str): Dataset name used for file name
        '''
        data_en = list()
        data_fr = list()
        prob_data_en = list()
        prob_data_fr = list()
        # Get metadata for all files
        for file in files:
            try:
                # Open the file to get the dataset
                dataset = gdal.Open(file)
                # Get the dataset metadata
                if file.endswith('.grib2'):
                    name = dataset.GetRasterBand(1).GetMetadataItem('GRIB_COMMENT')
                    level = dataset.GetRasterBand(1).GetMetadataItem('GRIB_SHORT_NAME')
                elif file.endswith('.nc'):
                    name = dataset.GetRasterBand(1).GetMetadataItem('long_name')
                    level = dataset.GetRasterBand(1).GetMetadataItem('NETCDF_DIM_depth')
                # Insert metadata in variable or product lists
                if name in self.product_LUT:
                    prob_data_en.append(self.generate_prod_row('EN', name, level))
                    prob_data_fr.append(self.generate_prod_row('FR', name, level))
                else:
                    data_en.append(self.generate_row('EN', name, level))
                    data_fr.append(self.generate_row('FR', name, level))
            except Exception as e:
                logger.error(e)
        
        header_en = 'Variable,Abbreviation,Level,Unit'
        header_fr = 'Variable,Abréviation,Niveau,Unité'
        # Write to english variable table file
        write_variable_table(data_en, directory, model + '_en.csv', header_en)
        # Write to french variable table file
        write_variable_table(data_fr, directory, model + '_fr.csv', header_fr)
        # Write to english product table file
        write_variable_table(prob_data_en, directory, model + '_prob_en.csv', header_en)
        # Write to french product table file
        write_variable_table(prob_data_fr, directory, model + '_prob_fr.csv', header_fr)

    def generate_row(self, language, variable_key, level_key):
        '''
            Create a formatted table row from metadata.
            Translate metadata to english or french with lookup tables.

            Parameters:
                language (str): "EN" for english or "FR" for french
                variable_key (str): Variable name
                level_key (str): Variable level
            Returns:
                row (str): Formatted table row   
        '''
        # Convert variable with lookup table
        if variable_key in self.variable_LUT:
            variable = self.variable_LUT[variable_key]['Variable'][language]
            abbreviation = self.variable_LUT[variable_key]['Abbreviation']
            unit = self.variable_LUT[variable_key]['Unit']
        else:
            logger.warning(f'Variable {variable_key} not found')
            variable = variable_key
            abbreviation = 'unknown'
            unit = 'unknown'
        # Convert level with lookup table
        if level_key in self.level_LUT:
            level = self.level_LUT[level_key][language]
        elif level_key is None:
            level = 'Surface'
        else:
            logger.warning(f'Level {level_key} not found')
            level = level_key
        # Return formatted row
        return f'{variable},{abbreviation},{level},{unit}'

    def generate_prod_row(self, language, variable_key, level_key):
        '''
            Create a formatted table row from probabilistic product.
            Translate metadata to english or french with lookup tables.

            Parameters:
                language (str): "EN" for english or "FR" for french
                variable_key (str): Variable name
                level_key (str): Variable level
            Returns:
                row (str): Formatted table row   
        '''
        # Convert variable with lookup table
        variable = self.product_LUT[variable_key]['Variable'][language]
        abbreviation = self.product_LUT[variable_key]['Abbreviation']
        unit = self.product_LUT[variable_key]['Unit']
        # Convert level with lookup table
        if level_key in self.level_LUT:
            level = self.level_LUT[level_key][language]
        elif level_key is None:
            level = 'Surface'
        else:
            logger.warning(f'Level {level_key} not found')
            level = level_key
        # Return formatted row
        return f'{variable},{abbreviation},{level},{unit}'

def write_variable_table(data, directory, name, header):
    '''
    Write GRIB2 or NetCDF variable table into file.

        Parameters:
            data ([str]): Table rows
            directory (str): File directory
            name (str): File name and extension
            header (str): Table header
    '''
    if data:
        filename = os.path.join(directory, name)
        # Remove duplicate lines in the list
        data = list(dict.fromkeys(data))
        # Sort list by variable name
        data.sort()
        # Delete existing file
        if os.path.exists(filename):
            os.remove(filename)
        # Open the file
        logger.info(f'Writing into file: {filename}')
        out = open(filename, 'w')
        # Write the header
        out.write(f'{header}\n')
        # Write the variables
        for line in data:
            out.write(f'{line}\n')
        # Close the files
        out.close()
