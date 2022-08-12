import React from "react";
import { FileInput } from '@mantine/core';
import { readFilter } from '@poetent/filters-lib';

export function FilterChooser(props: any) {

    return (
        <FileInput
            placeholder="Pick a filter"
            label="Existing Filter"
        />);
}