import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './Counter.css';
import ReactDataGrid from 'react-data-grid';
import createRowData from './CreateRowdata';
import './Validator.css';

class Validator extends Component {

  static propTypes = {
    callTrustIndex: PropTypes.func.isRequired
  };
  render() {
    console.log('Vinay--> this.p[rops--> ', this.props);
    // eslint-disable-next-line react/prop-types
    const { dispatch, callTrustIndex } = this.props;

    const defaultColumnProperties = {
      width: 160
    };

    const columns = [
      {
        key: 'id',
        name: 'ID'
      },
      {
        key: 'firstName',
        name: 'First Name'
      },
      {
        key: 'lastName',
        name: 'Last Name'
      },
      {
        key: 'jobTitle',
        name: 'Job Title'
      },
      {
        key: 'jobArea',
        name: 'Job Area'
      },
      {
        key: 'jobType',
        name: 'Job Type'
      },
      {
        key: 'email',
        name: 'Email'
      },
      {
        key: 'street',
        name: 'Street'
      },
      {
        key: 'zipCode',
        name: 'ZipCode'
      },
      {
        key: 'date',
        name: 'Date'
      },
      {
        key: 'catchPhrase',
        name: 'Catch Phrase'
      },
      {
        key: 'checkTrustIndex',
        name: 'Trust Index'
      }
    // eslint-disable-next-line prefer-arrow-callback
    ].map( function (c) { 
        
        return { ...c, ...defaultColumnProperties };
    });

    // .map(c => ({ ...c, ...defaultColumnProperties }));

    // // pairs = evens.map(c => ({ even: v, odd: v + 1 }))
    // pairs = evens.map(function (c) { return { ...c, ...defaultColumnProperties }; });


    // const firstNameActions = [
    //   {
    //     icon: <span className="glyphicon glyphicon-remove" />,
    //     callback: () => {
    //       // eslint-disable-next-line no-alert
    //       alert('Deleting');
    //     }
    //   },
    //   {
    //     icon: 'glyphicon glyphicon-link',
    //     actions: [
    //       {
    //         text: 'Option 1',
    //         callback: () => {
    //           // eslint-disable-next-line no-alert
    //           alert('Option 1 clicked');
    //         }
    //       },
    //       {
    //         text: 'Option 2',
    //         callback: () => {
    //           // eslint-disable-next-line no-alert
    //           alert('Option 2 clicked');
    //         }
    //       }
    //     ]
    //   }
    // ];
    // const checkTrustIndexActions = [
    //   {
    //     icon: <span className="glyphicon glyphicon-eye-open" />,
    //     callback: () => {

    //     this.props.dispatch
    //     //   fetch('http://3.209.192.10:6066/address/validate?isDomestic=true&address2=apt 204c&city=ann arbor&zip=48105')
    //     //     // eslint-disable-next-line arrow-body-style
    //     //     .then((result) => {
    //     //         // Get the result
    //     //         // If we want text, call result.text()
    //     //       return result.json();
    //     //     }).then((jsonResult) => {
    //     //         // Do something with the result
    //     //       // eslint-disable-next-line no-console
    //     //       console.log(jsonResult);
    //     //     });
    //     //   // eslint-disable-next-line no-alert
    //       alert('Calling Address Verification API');
    //     }
    //   }
    // ];

    function getCellActions(column, row) {
    
      // eslint-disable-next-line no-console
      console.log('Vinay--> getCellActions--> ', column, 'row-->', row);

      let payload = {
        'value': column
      }; 
      dispatch(callTrustIndex(payload));
      //   const cellActions = {
    //     checkTrustIndex: checkTrustIndexActions
    //   };
    //   return row.id ? cellActions[column.key] : null;
    }

    const ROW_COUNT = 50;

    const rows = createRowData(50);

    let rowGetter = (rowNumber) => rows[rowNumber];


    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div><h2>Vinay Sagar</h2>
        <div>
          <ReactDataGrid
            className="myFont"
            columns={columns}
            rowGetter={rowGetter}
            rowsCount={ROW_COUNT}
            minHeight={500}
            getCellActions={getCellActions}
          />
        </div>
      </div>
    );
  }
}

export default Validator;
