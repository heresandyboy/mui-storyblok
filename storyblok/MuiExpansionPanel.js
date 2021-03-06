module.exports = {
  "name": "MuiExpansionPanel",
  "display_name": null,
  "updated_at": "2020-06-15T22:31:43.758Z",
  "schema": {
    "rootClass": {
      "type": "options"
    },
    "defaultExpanded": {
      "type": "boolean"
    },
    "width": {
      "type": "text",
      "required": true,
      "default_value": "100%",
      "description": "width of panel"
    },
    "expansionPanelSummary": {
      "type": "bloks",
      "required": true,
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiExpansionPanelSummary"
      ]
    },
    "expansionPanelDetails": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiExpansionPanelDetails"
      ],
      "maximum": "1",
      "required": true
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiExpansionPanel",
  "component_group_uuid": null
}