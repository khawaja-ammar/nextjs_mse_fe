"use client";

import { env } from "@/lib/env.mjs";
import React from "react";
import AutoSuggest from "react-autosuggest";

const MAX_SUGGESTIONS = 5;

type Suggestion = {
  id: number;
  name: string;
};
// const suggestions = [
//   { id: 1, name: "Company1" },
//   { id: 2, name: "Company2" },
//   { id: 3, name: "Company3" },
//   { id: 4, name: "Company4" },
//   { id: 5, name: "Company5" },
//   { id: 6, name: "Company6" },
//   { id: 7, name: "Company7" },
// ];

// const lowerCasedSuggestions = suggestions.map((suggestion) => {
//   return {
//     id: suggestion.id,
//     name: suggestion.name.toLowerCase(),
//   };
// });

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchAutoSuggest({ value, setValue }: Props) {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  // This function returns the list of suggestions
  async function fetchSuggestions(value: string) {
    const res = await fetch(
      `${env.NEXT_PUBLIC_AUTOSUGGEST_SERVICE_URL}/test/jsonautosuggest?q=${value}&max=${MAX_SUGGESTIONS}`,
      {
        method: "GET",
        // cache: "no-store",
      },
    );
    const data: Suggestion[] = await res.json();
    setSuggestions(data);
  }

  // function getSuggestions(value: string) {
  //   return lowerCasedSuggestions.filter((suggestion) =>
  //     suggestion.name.includes(value.trim().toLowerCase()),
  //   );
  // }
  return (
    <AutoSuggest
      inputProps={{
        placeholder: "Where to?",
        value: value,
        onChange: (_, { newValue }) => {
          setValue(newValue);
        },
      }}
      suggestions={suggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value }) => {
        setValue(value);
        fetchSuggestions(value);
      }}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      // onSuggestionSelected={(_, { suggestionValue }) => {
      // setValue
      // console.log("Selected: " + suggestionValue)
      // }}
      // renderSuggestion dictates how struct of suggestions must be rendered
    />
  );
}
