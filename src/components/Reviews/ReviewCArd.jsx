import { RiDoubleQuotesR } from "react-icons/ri";

const ReviewCArd = ({ review }) => {
  //   console.log(review);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm">
        {/* Quote Icon */}
        <div className="text-teal-300 text-4xl mb-4">
          <RiDoubleQuotesR color="#636380" />
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 leading-relaxed mb-6">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day.
        </p>

        {/* Dashed Divider */}
        <div className="border-t-2 border-dashed border-gray-300 mb-6"></div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-/">
            <img src={review.user_photoURL} alt="" />
          </div>
          <div>
            <h4 className="text-green-900 font-semibold">{review.userName}</h4>
            <p className="text-gray-600 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCArd;
