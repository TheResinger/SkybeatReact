export default {
  getReviews: () => {
    return fetch('/user/reviews').then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
  postReview: review => {
    return fetch('/user/newreview', {
      method: 'post',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
};
