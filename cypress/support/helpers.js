import moment from 'moment';

export default {
  dateInNextDays: (nextDays) => moment().clone().add(nextDays, 'days'),
};
