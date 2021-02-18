import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const onClickOpenModal = (e) => {
        dispatch( uiOpenModal() );
        dispatch( eventClearActiveEvent() );
    }

    return (
        <div>
            <button
                className="btn btn-primary fab"
                onClick={ onClickOpenModal }
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}
