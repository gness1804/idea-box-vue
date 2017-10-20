const upQuality = (quality) => {
  let result;
  if (quality === 'Swill') {
    result = 'Plausible';
  } else if (quality === 'Plausible') {
    result = 'Genius';
  } else {
    result = quality;
  }
  return result;
};

export default upQuality;
