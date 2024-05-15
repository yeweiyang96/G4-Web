import PluginManager from '@jbrowse/core/PluginManager';
import Plugin from '@jbrowse/core/Plugin';

export default class Feature_Color extends Plugin {
  name = 'Feature_Color';
  override install() {}
  override configure(pluginManager: PluginManager) {
    pluginManager.jexl.addFunction('Feature_Color', feature => {
      console.log('configuring Feature_Color plugin');
      const type = feature.get('type');
      if (type === 'CDS') {
        return 'red';
      } else if (type === 'exon') {
        return 'green';
      } else {
        return 'purple';
      }
    });
  }
}
