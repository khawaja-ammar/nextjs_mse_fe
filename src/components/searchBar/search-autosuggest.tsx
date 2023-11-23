"use client";

import React from "react";
import AutoSuggest from "react-autosuggest";

type Suggestion = {
  id: number;
  name: string;
};
const suggestions = [
  { id: 1, name: "Company1" },
  { id: 2, name: "Company2" },
  { id: 3, name: "Company3" },
  { id: 4, name: "Company4" },
  { id: 5, name: "Company5" },
  { id: 6, name: "Company6" },
  { id: 7, name: "Company7" },
];

const lowerCasedSuggestions = suggestions.map((suggestion) => {
  return {
    id: suggestion.id,
    name: suggestion.name.toLowerCase(),
  };
});

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchAutosuggest({ value, setValue }: Props) {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  function getSuggestions(value: string) {
    return lowerCasedSuggestions.filter((suggestion) =>
      suggestion.name.includes(value.trim().toLowerCase()),
    );
  }
  return (
    <AutoSuggest
      suggestions={suggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value }) => {
        console.log(value);
        setValue(value);
        setSuggestions(getSuggestions(value));
      }}
      onSuggestionSelected={(_, { suggestionValue }) =>
        console.log("Selected: " + suggestionValue)
      }
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      inputProps={{
        placeholder: "Where to?",
        value: value,
        onChange: (_, { newValue }) => {
          setValue(newValue);
        },
      }}
      highlightFirstSuggestion={true}
    />
  );
}
