import React, { useState } from "react";

const Searchbar = ({onSubmit}) => {

  const [form, setForm] = useState('');

  const handleForm = (e) => {
    setForm(e.currentTarget.value.toLowerCase())
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

    return (
      <header className="Searchbar">
        <form onSubmit={submitForm} className="SearchForm">
          <input
            name="form"
            onChange={handleForm}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  
}

export default Searchbar;


// class Searchbar extends Component {
//   state = {
//     form: "",
//   };

//   handleForm = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value.toLowerCase(),
//     });
//   };

//   submitForm = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.form);
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form onSubmit={this.submitForm} className="SearchForm">
//           <input
//             name="form"
//             onChange={this.handleForm}
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />

//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>
//         </form>
//       </header>
//     );
//   }
// }