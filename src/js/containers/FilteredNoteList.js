import { connect } from 'react-redux';
import NoteList from '../components/NoteList';


const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FilteredNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default FilteredNoteList;