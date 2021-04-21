import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import {connect} from 'react-redux';

import ViewSelectorContainer from './container/ViewSelectorContainer';
import InputContainer from './container/InputContainer';
import FavoriteListContainer from './container/FavoriteListContainer';
import FloatingButtonContainer from './container/FloatingButtonContainer';
import ContactModalContainer from './container/ContactModalContainer';
import ContactListContainer from './container/ContactListContainer';

class App extends Component {
  render() {

    const {view} = this.props;

    return(
      <div>
          <Header />
          <ViewSelectorContainer />

          {/* view 값에 따라 다른 컨테이너를 보여준다 */}
          <Container visible={view === 'favorite'}>
              <FavoriteListContainer />
          </Container>
          <Container visible={view === 'list'}>
              <InputContainer/>
              <ContactListContainer />
          </Container>

          <ContactModalContainer />
          <FloatingButtonContainer/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    view: state.base.get('view')
  })
)(App);