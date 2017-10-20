// @flow
const downQuality = (quality: string): string => {
  let result;
  if (quality === 'Genius') {
    result = 'Plausible';
  } else if (quality === 'Plausible') {
    result = 'Swill';
  } else {
    result = quality;
  }
  return result;
};

export default downQuality;
