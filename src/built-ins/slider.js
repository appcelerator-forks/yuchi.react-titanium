// Generated by scripts/generate-built-ins

import { register } from '../ReactTitaniumBridge';

register('slider', 'Ti.UI.Slider', {
  factory: props => Ti.UI.createSlider(props)
});