import exclusionList from 'metro-config/src/defaults/exclusionList'
export default {
    "metro": {
        "transformer": {
          "transform": {
            "experimentalImportSupport": false,
            "inlineRequires": true
          }
        },
        "resolver": {
          "blacklistRE": exclusionList([/dist\/.*/])
        }
      }
}