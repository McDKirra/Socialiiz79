import * as React from 'react';
import styles from './Socialiiz79.module.scss';
import { ISocialiiz79Props } from './ISocialiiz79Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Socialiiz79 extends React.Component<ISocialiiz79Props, {}> {
  public render(): React.ReactElement<ISocialiiz79Props> {
    console.log('Hi');
    return (
      <div className={ styles.socialiiz79 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!!!!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
