import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Button,
} from '@folio/stripes/components';

export function TitleDetailsExpectedActions({ checkinItems, openModal, titleId, hasReceive }) {
  return (
    <>
      {hasReceive && (
        <Button
          data-test-title-receive-button
          to={`/receiving/receive/${titleId}`}
        >
          <FormattedMessage id="ui-receiving.title.details.button.receive" />
        </Button>
      )}
      {checkinItems && (
        <Button
          data-test-add-piece-button
          onClick={openModal}
        >
          <FormattedMessage id="ui-receiving.piece.button.addPiece" />
        </Button>
      )}
    </>
  );
}

TitleDetailsExpectedActions.propTypes = {
  checkinItems: PropTypes.bool.isRequired,
  hasReceive: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  titleId: PropTypes.string.isRequired,
};