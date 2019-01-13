import React from 'react'

/**
 *@author mozcan
 *@description  Class isimlerinin ilk harfi büyük olmak zorunda
 * App js üzerinden impot etmek istiyorsak bu componenti export etmeliyiz.
 */
export class FirstComponent extends React.Component {
    render() {
        const veriler=this.props.myliste.map((element,index)=>{ 
            return( 
                <li key={index}>
                {index+1}-{element}
                </li>
            )
        })

        return (
            <div> İlk Component <br/>
                <h1>{this.props.ilkprop} </h1>
                <ul> 
                    {veriler}
                </ul>
            </div>
        );

    }

}