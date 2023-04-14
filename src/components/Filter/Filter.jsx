import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";

const Filter = ({ value, onFilter }) => {
    return (
        <FilterInput 
            type="text"
            value={value}
            onChange={onFilter} 
        />
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
};