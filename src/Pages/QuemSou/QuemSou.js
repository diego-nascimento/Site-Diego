import React from 'react';

import ComingSoon from '../ComingSoon/ComingSoon';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';

function QuemSou(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(1));
  });

  return <ComingSoon />;
}

export default connect()(QuemSou);
