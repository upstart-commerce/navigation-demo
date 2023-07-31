export class ComponentStyles {
  self?: baseStyle;
  heading?: baseStyle;

  constructor(attribute) {
    this.self = {};
    this.heading = {};
    this.self['background-color'] =  attribute?.field_background_color?.color;
    if(attribute?.field_border_color?.color) {
      this.self['border'] = '1px solid'
      this.self['border-color'] = attribute?.field_border_color?.color;
    }

    if(attribute?.field_heading_alignment) {
      this.heading['text-align'] = attribute?.field_heading_alignment;
    }

  }
}

interface baseStyle {
  'background'?: string;
  'border'?: string;
  'border-color'?: string;
  'color'?: string;
  'text-align'?: string;
}
