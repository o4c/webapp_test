import * as fs from 'fs'
import * as domain from '@imgzine/imgzine-react-webcore/dist/domain'

import hardConfig from './hardConfig';

//make sure it is of correct type
const hardConfig2: domain.CustomConfig = hardConfig

// create dist folder if does not exist
const dir = './dist';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// create dist/configuration.json
fs.writeFileSync(`${dir}/hardConfig.json`, JSON.stringify(hardConfig2, null, '  '))