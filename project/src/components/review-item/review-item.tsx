import { HumanDateOptions, ProMarkClassNames } from 'const/const';
import { Review } from 'types/review';
import { convertRatingToPercent } from 'utils/utils';
import ProMark from 'components/pro-mark/pro-mark';

type ReviewItemType = {
  review: Review
}

export default function ReviewItem({review}: ReviewItemType) {
  const {date, id, user, comment, rating} = review;
  const humanDate = new Date(date).toLocaleDateString('en-US', HumanDateOptions);
  const dateTime = new Date(date).toISOString();

  return (
    <li key={`review-${id}`} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
        {user.isPro && <ProMark proMarkClassName={ProMarkClassNames.REVIEW}/>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRatingToPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{humanDate}</time>
      </div>
    </li>
  );
}
