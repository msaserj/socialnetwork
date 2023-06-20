// Paginator.stories.js
import React from 'react';
import { Paginator } from './Paginator';

export default {
  title: 'Components/Paginator',
  component: Paginator
};

const Template = (
  args: JSX.IntrinsicAttributes & {
    onPageChanged: (pgs: number, pageSize: number) => void;
    totalItemsCount: number; // Define your onPageChanged logic here
    // Define your onPageChanged logic here
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    reset: number;
  }
) => <Paginator {...args} />;

export const Default = Template.bind({});

// @ts-ignore
Default.args = {
  onPageChanged: (pgs: number, pageSize: number) => {
    // Define your onPageChanged logic here
    console.log(`Page changed: ${pgs}, PageSize: ${pageSize}`);
  },
  totalItemsCount: 2000,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  reset: 0
};
