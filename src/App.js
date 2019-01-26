import React, {Component} from 'react';
import FormContainer from './js/components/container/FormContainer';

//import my css needed to make this layout look right.

class App extends Component {
    render() {
        //Probably where my overall layout lives
        //Possibly where my React - Router lives
        return (
        <main>
            <nav>
                <div>Link 1</div>
                <div>Link 2</div>
            </nav>
            <section>
                <div>Hello again I changed stuff.</div>
            </section>
            <section>
                <FormContainer/>
            </section>  
        </main>
        );
    }
}

export default App;