const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#post-comment').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content : comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.comments')
  .addEventListener('submit', newFormHandler);