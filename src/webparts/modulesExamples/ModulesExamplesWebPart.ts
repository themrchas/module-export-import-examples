import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ModulesExamplesWebPart.module.scss';
import * as strings from 'ModulesExamplesWebPartStrings';

export interface IModulesExamplesWebPartProps {
  description: string;
}

import { exportedNumber, exportFunction, functionRenameExport} from './module1';

import { varModule2, varModule3, varModule4} from './module4'

import * as mod5Import from './module5';


//default export/import
import module6Variable from './module6'

import {functionMod6} from './module6'


//This side-effect imports but unable to use the imported variable 'globalModuleVar'
import './ModulesGlobalExample';


 
export default class ModulesExamplesWebPart extends BaseClientSideWebPart<IModulesExamplesWebPartProps> {

  //private importedSideffect = globalModuleVar; //89 

  private mod5Class = new mod5Import.module5Class();

  public render(): void {

    

    this.domElement.innerHTML = `
      <div class="${ styles.modulesExamples }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
              <br>
              <div>Imported 'exportedNumber' with value ${exportedNumber}</div>
              <br>
              <div>${exportFunction()}</div>
              <br>
              <div>${functionRenameExport()}</div>
              <br>
              <div>The following were imported from from module4.ts the first two of which were re-exported through module4</div>
              <ul>
                <li>varModule2: ${varModule2}</li>
                <li>varModule3: ${varModule3}</li>
                <li>varModule4: ${varModule4}</li>
              </ul>

              <br>
              <br>
              <div>From module5 mod5Class.printIt(): '${this.mod5Class.printIt()}'</div>
              <br>
              <br>
              <div>default export from module 6 is '${module6Variable}'<div>
              <div>non default export from module 6 is '${functionMod6()}'</div>


           

           
            </div>
          </div>
        </div>
      </div>`;
  }


  protected printGlobalVar() {
    console.log("globalModuleVar value is",globalModuleVar )
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
