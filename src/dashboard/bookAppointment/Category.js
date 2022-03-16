import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Categories = {
  'Career/Academic': [
    'Career Confusion',
    'Career Shift',
    'Interview Prep',
    'Entreprenuership',
    'Time Management',
    'Study Skills',
    'Others',
    'Job Loss',
    'Work-life balance',
  ],
  'Domestic Abuse': ['Financial', 'Neglect', 'Emotional', 'Sexual', 'Physical'],
};
const Category = () => {
  return (
    <div className="ba">
      <div class="wrapper">
        <div class="baBoxContainer">
          <div class="baBox textLeft">
            <h3 className="textJustify">Help us find you the right Expert</h3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
              >
                <MenuItem value={1}>Career/Academic</MenuItem>
                <MenuItem value={2}>Domestic Abuse</MenuItem>
                <MenuItem value={3}>Family & Friends</MenuItem>
                <MenuItem value={4}>Love-Relationship</MenuItem>
                <MenuItem value={5}>Self-Improvement</MenuItem>
                <MenuItem value={5}>Sexual-Wellness</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sub Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sub Category"
              >
                <MenuItem value={1}>Career/Academic</MenuItem>
                <MenuItem value={2}>Domestic Abuse</MenuItem>
                <MenuItem value={3}>Family & Friends</MenuItem>
                <MenuItem value={4}>Love-Relationship</MenuItem>
                <MenuItem value={5}>Self-Improvement</MenuItem>
                <MenuItem value={6}>Sexual-Wellness</MenuItem>
              </Select>
            </FormControl>
            <a href="/" class="btn">
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
