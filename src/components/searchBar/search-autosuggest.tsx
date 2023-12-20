"use client";

import { env } from "@/lib/env.mjs";
import React from "react";
import AutoSuggest from "react-autosuggest";

const MAX_SUGGESTIONS = 5;

type Suggestion = {
  id: number;
  name: string;
};

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchAutoSuggest({ value, setValue }: Props) {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  // This function returns the list of suggestions
  async function fetchSuggestions(value: string) {
    try {
      const res = await fetch(
        `${env.NEXT_PUBLIC_AUTOSUGGEST_SERVICE_URL}/test/jsonautosuggest?q=${value}&max=${MAX_SUGGESTIONS}`,
        {
          method: "GET",
          // cache: "no-store",
        },
      );
      if (!res.ok) {
      }
      const data: Suggestion[] = await res.json();
      setSuggestions(data);
    } catch (err) {}
  }

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
    />
  );
}
