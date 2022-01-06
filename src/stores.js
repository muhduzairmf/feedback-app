import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: '79172840',
        rating: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Aliquam faucibus purus in massa tempor nec feugiat.'
    },
    {
        id: '94084127',
        rating: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Aliquam faucibus purus in massa tempor nec feugiat.'
    },
    {
        id: '259053',
        rating: 8,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Aliquam faucibus purus in massa tempor nec feugiat.'
    }
]);
