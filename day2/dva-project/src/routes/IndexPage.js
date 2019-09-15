import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
function IndexPage() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
