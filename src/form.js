import React from 'react';

export class Form extends React.Component{
    birseyYap(e){
        e.preventDefault();//enter'e basıldığında sayfanın yenilenmemesini istiyorsak
        const dgr = document.getElementById('input').value;
        console.log('>>>>>>>>>>>>'+dgr);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.birseyYap}>
                    <input type="text" id="input"  />
                </form>
                <button onClick={this.birseyYap}>Gönder</button>
            </div>
        );
    }
}