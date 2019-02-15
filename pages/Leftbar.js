import React, { Component } from "react";
import {
  removeComponent,
  updateHits
} from "@appbaseio/reactivecore/lib/actions";

import {
  MultiDataList,
  RangeSlider,
  TagCloud,
  DateRange,
  MultiList,
  SingleRange
} from "@appbaseio/reactivesearch";

const components = {
  multiListModality: {
    componentId: "modality-list",
    dataField: "Modality.raw",
    className: "modality-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Modalities",
    showCheckbox: true,
    showCount: true,
    showSearch: true,
    placeholder: "Search for a Modality",
    react: {
      and: [
        "mainSearch",
        "results",
        "gender-list",
        "bodypart-list",
        "age-slider",
        "acquisitiondate-range",
        "tagCloud"
      ]
    },
    showFilter: true,
    filterLabel: "Modality",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  multiListGender: {
    componentId: "gender-list",
    dataField: "PatientSex.raw",
    className: "gender-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Genders",
    showCheckbox: true,
    showCount: true,
    showSearch: false,
    placeholder: "Search for a Gender",
    react: {
      and: [
        "mainSearch",
        "results",
        "modality-list",
        "bodypart-list",
        "age-slider",
        "acquisitiondate-range",
        "tagCloud"
      ]
    },
    showFilter: true,
    filterLabel: "Gender",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  multiListBodyPart: {
    componentId: "bodypart-list",
    dataField: "BodyPartExamined.raw",
    className: "bodypart-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Body Parts",
    showCheckbox: true,
    showCount: true,
    showSearch: true,
    placeholder: "Search for a Body Part",
    react: {
      and: [
        "mainSearch",
        "results",
        "modality-list",
        "gender-list",
        "age-slider",
        "acquisitiondate-range",
        "tagCloud"
      ]
    },
    showFilter: true,
    filterLabel: "Body Part",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  rangeSliderAge: {
    componentId: "age-slider",
    dataField: "PatientAgeInt",
    className: "age-filter",
    filterLabel: "Age",
    range: {
      start: 0,
      end: 100
    },
    rangeLabels: {
      start: "0",
      end: "100"
    },
    react: {
      and: [
        "mainSearch",
        "results",
        "modality-list",
        "gender-list",
        "bodypart-list",
        "acquisitiondate-range",
        "tagCloud"
      ]
    }
  },
  dateRangeAcquisition: {
    componentId: "acquisitiondate-range",
    dataField: "AcquisitionDate",
    className: "acquisitiondate-filter"
  },
  multiDataList: {
    componentId: "language-list",
    dataField: "original_language.raw",
    className: "language-filter",
    size: 100,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Languages",
    showCheckbox: true,
    showSearch: true,
    placeholder: "Search for a language",
    react: {
      and: [
        "mainSearch",
        "results",
        "date-filter",
        "RangeSlider",
        "modality-list",
        "revenue-list"
      ]
    },
    data: [
      {
        label: "English",
        value: "English"
      },
      {
        label: "Chinese",
        value: "Chinese"
      },
      {
        label: "Turkish",
        value: "Turkish"
      },
      {
        label: "Swedish",
        value: "Swedish"
      },
      {
        label: "Russian",
        value: "Russian"
      },
      {
        label: "Portuguese",
        value: "Portuguese"
      },
      {
        label: "Korean",
        value: "Korean"
      },
      {
        label: "Japanese",
        value: "Japanese"
      },
      {
        label: "Italian",
        value: "Italian"
      },
      {
        label: "Hindi",
        value: "Hindi"
      },
      {
        label: "French",
        value: "French"
      },
      {
        label: "Finnish",
        value: "Finnish"
      },
      {
        label: "Spanish",
        value: "Spanish"
      },
      {
        label: "Deutsch",
        value: "Deutsch"
      }
    ],
    showFilter: true,
    filterLabel: "Language",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  singleRange: {
    componentId: "revenue-list",
    dataField: "ran_revenue",
    className: "revenue-filter",
    data: [
      { start: 0, end: 1000, label: "< 1M" },
      { start: 1000, end: 10000, label: "1M-10M" },
      { start: 10000, end: 500000, label: "10M-500M" },
      { start: 500000, end: 1000000, label: "500M-1B" },
      { start: 1000000, end: 10000000, label: "> 1B" }
    ],
    showRadio: true,
    showFilter: true,
    filterLabel: "Revenue",
    URLParams: false,
    innerClass: {
      label: "revenue-label",
      radio: "revenue-radio"
    }
  }
};

class Leftbar extends Component {
  constructor() {
    super();
    this.state = { isChecked: false };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  static async getInitialProps() {
    return {
      store: await initReactivesearch(
        [
          {
            ...components.multiListModality,
            type: "MultiList",
            source: MultiList
          },
          {
            ...components.multiListBodyPart,
            type: "MultiList",
            source: MultiList
          },
          {
            ...components.multiListGender,
            type: "MultiList",
            source: MultiList
          },
          {
            ...components.multiDataList,
            type: "MultiDataList",
            source: MultiDataList
          },
          {
            ...components.dateRangeAcquisition,
            type: "DateRange",
            source: DateRange
          },
          {
            ...components.rangeSliderAge,
            type: "RangeSlider",
            source: RangeSlider
          },
          {
            ...components.singleRange,
            type: "SingleRange",
            source: SingleRange
          }
        ],
        null
      )
    };
  }

  render() {
    var show_rangeSliderAge;
    if (this.state.isChecked) {
      show_rangeSliderAge = "checked";
    } else {
      show_rangeSliderAge = "unchecked";
      // updateHits()
      // removeComponent(...components.dateRangeAcquisition)
      // this.forceUpdate();
      // console.log(document)
      // var elem = document.getElementById('ceohuao');
      // elem.parentNode.removeChild(elem);
    }

    return (
      <div className={this.props.isClicked ? "left-bar-optional" : "left-bar"}>
        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-camera" /> Modality{" "}
          </b>
        </div>

        <MultiList {...components.multiListModality} />

        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-user" /> Body Part{" "}
          </b>
        </div>

        <MultiList {...components.multiListBodyPart} />

        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-transgender" /> Gender{" "}
          </b>
        </div>

        <MultiList {...components.multiListGender} />
        {/*
        <hr className="blue" />
        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-dollar" /> Revenue{" "}
          </b>
        </div>

        <SingleRange {...components.singleRange} />*/}

        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            <i className="fa fa-address-card" /> Patient Age
          </b>
        </div>

        {/*<div>
           <input type="checkbox" onChange={ this.handleChecked }/>
           <p>This box is {show_rangeSliderAge}</p>
        </div>
        {show_rangeSliderAge === 'checked' &&
          <RangeSlider {...components.rangeSliderAge} />
        }*/}
        <RangeSlider {...components.rangeSliderAge} />

        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-calendar" /> Acquisition Date{" "}
          </b>
        </div>

        <DateRange {...components.dateRangeAcquisition} />

        {/*        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-language" /> Nope{" "}
          </b>
        </div>

        <MultiDataList {...components.multiDataList} />

        <hr className="blue" />*/}
      </div>
    );
  }
}
export default Leftbar;
