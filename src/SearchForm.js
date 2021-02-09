import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="search-form">
        <input
          id="search-bar"
          type="text"
          placeholder="Enter city"
          autoComplete="off"
          class="form-control"
          autoFocus="on"
        />
        <button
          id="search-icon"
          type="submit"
          value="search"
          class="btn btn-primary"
        >
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
