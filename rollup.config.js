import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

const customResolver = resolve({
  extensions:['.scss','.jsx']
})
const projectRootDir =path.resolve(__dirname);

export default {
  plugins:[
    alias({
      entries:[
        {
          find:'src',
          replacement:path.resolve('projectRootDir,'src')
        }
      ]
    })
  ]
}