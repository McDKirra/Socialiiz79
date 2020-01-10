import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Socialiiz79WebPartStrings';
import Socialiiz79 from './components/Socialiiz79';
import { ISocialiiz79Props } from './components/ISocialiiz79Props';

export interface ISocialiiz79WebPartProps {
  description: string;
}

export default class Socialiiz79WebPart extends BaseClientSideWebPart<ISocialiiz79WebPartProps> {

  public render(): void {
    alert('Hi');
    const element: React.ReactElement<ISocialiiz79Props > = React.createElement(
      Socialiiz79,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
