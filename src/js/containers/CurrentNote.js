import { connect } from 'react-redux';
import Note from '../components/Note';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.params.key]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CurrentNote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

export default CurrentNote;