# YouTube Clone

This YouTube clone is made with ReactJS, Material UI, Custom Hooks for use the YouTube API, format some date and numbers and use Dark Theme & Context for use the search term. This project is deployed on Firebase and it is responsive.

# Things that are working now

The Home retrieves 20 recommended videos from the API. In the video cards one can access to the video page (clicking on the video thumbnail and the video title) and the channel page (clicking on the channel thumbnail and the channel title).

In the Header there is a Search bar to search a especific video.

The Search Page shows videos and channel (if exists) that matchs with the term searched. Also here one can access to the videos and channels.

There is a Sidebar where one can switch between themes and this Sidebar that be minify clicking on the menu icon in the Header. The Sidebar renders on all the pages except the Video Page, but it mantains the theme selected anyway.

In the Video Page it is embed the video, shows video details and recommended videos (not related, indeed, is the component of the Home Page but accommodated).

The Channel Page shows channels details, cover image and twenty videos of the channel, where can be accesed too.

# Next things to add to the project

There is a lot of things that can be added to be a full YouTube clone, but the ones that have priority are:

Mantain the data from the API to reduce the API calls.

Infinite Scroll for the videos.

Login with a YouTube account.

Filters in Home Page and Search Page.

Related videos on Video Page.