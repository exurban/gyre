import BlurImage from '../../components/BlurImage'
import Link from 'next/link'

export default function Product() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <div className="flex flex-row items-center mt-10">
        <div className="basis-1/2">
          <h1 className="font-bold text-4xl">Product thoughts.</h1>
          <h2 className="text-neutral-700 dark:text-neutral-400">
            Sometimes I have thoughts on things. Occasionally, I write them
            down. These are those things.
          </h2>
        </div>
        <div className="basis-1/2 max-w-[15%] mx-auto">
          <BlurImage imageUrl="https://res.cloudinary.com/bjg-photo/image/upload/v1661301987/sasha/aaron-burden-xG8IQMqMITM-unsplash_bikpmv.jpg" />
        </div>
      </div>
      <hr className="my-6" />
      <h2 className="font-bold text-2xl">
        The product team<span>&#39;</span>s mandate is to direct the efficient
        creation of value in accordance with company strategy and product
        strategy.
      </h2>
      <div className="py-4">
        <b>Direct:</b> A PM is not the mini-CEO of the product. Most PMs don
        <span>&#39;</span>t have the authority to hire or fire engineers or
        designers or set company or product strategy the way a CEO would. A more
        useful analogy is to that of a movie director. The PM<span>&#39;</span>s
        role is to direct the team by:
        <div className="px-4">
          <ul className="list-disc list-inside">
            <li>setting the scene (providing context), </li>
            <li>
              guiding the team<span>&#39;</span>s efforts, and
            </li>
            <li>bringing out the best performance of each teammate.</li>
          </ul>
        </div>
        <div className="my-3 text-sm">
          <p className="italic">See also:</p>
          <ul className="list-disc list-inside">
            <li>
              <Link
                href="/product/movie-director"
                className="underline text-rose-500 hover:text-rose-400"
              >
                The PM as Director
              </Link>
            </li>
            <li>
              <Link
                href="/product/agile-v-scrum"
                className="underline text-rose-500 hover:text-rose-400"
              >
                Agile <span>&gt;</span> Scrum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4">
        <b>Efficient creation of value:</b> For each product or feature a team
        contemplates undertaking, they should develop answers to the following:
        <div className="px-4">
          <ul className="list-none list-inside">
            <li>
              <i>
                Threshold Test: Does solving this problem move us closer to
                achieving one or more company or product objectives?
              </i>
            </li>
          </ul>
          <ol className="list-decimal list-inside px-4">
            <li>
              What problem(s) does this solve for the user and/or the business?
            </li>
            <li>
              What is our hypothesis about how much value solving this problem
              will bring to the user and the company?
            </li>
            <li>How much will it cost to solve this problem? </li>
          </ol>
        </div>
        Provided they pass the threshold test, features hypothesized to have the
        greatest impact on product or company goals with the lowest cost should
        be prioritized. Additional prioritization criteria include the level of
        confidence in the hypothesis, and the cost of delay.
        <div className="my-3 text-sm">
          <p className="italic ">See also:</p>
          <ul className="list-disc list-inside">
            <li>
              <Link
                href="/product/prioritization"
                className="underline text-rose-500 hover:text-rose-400"
              >
                Prioritization
              </Link>
            </li>
            <li>
              <Link
                href="/product/roadmapping"
                className="underline text-rose-500 hover:text-rose-400"
              >
                Roadmapping
              </Link>
            </li>
            <li>
              <Link
                href="/product/modern-prd"
                className="underline text-rose-500 hover:text-rose-400"
              >
                The Modern PRD
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4">
        <b>In accordance with company strategy and product strategy:</b> The PM
        working at the indvivdual contributor level often doesn
        <span>&#39;</span>t have input into the creation of company or product
        strategy. The product strategy serves as the framework for the creation
        of tactics--the objectives to be accomplished in the next 3 to 12
        months, which set the framework within which the IC PM operates.
        Regardless of which goal-setting system the company uses (SMART, CLEAR,
        OKRs, etc.), all projects should tie directly back to one or more of
        these objectives.
        <div className="my-3 text-sm">
          <p className="italic">See also:</p>
          <ul className="list-disc list-inside">
            <li>
              <Link
                href="/product/strategy-tactics"
                className="underline text-rose-500 hover:text-rose-400"
              >
                Strategy & Tactics
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4">
        <b>Example:</b> Consider the video conferencing giant, Zoob, who uses
        OKRs. One component of Zoob<span>&#39;</span>s product strategy is to
        become the #1 provider of paid video conferencing services in the US.
        Zoob has translated this component of its strategy into an objective it
        aims to tackle in the next 12 months: To convince users to switch from
        Boogle<span>&#39;</span>s Hey There! product, Zoob<span>&#39;</span>s
        biggest competitor. A key result for this objective is a 10% increase in
        Zoob
        <span>&#39;</span>s market share with a corresponding decrease of at
        least 5% in Hey There!<span>&#39;</span>s market share.
      </div>
      <div className="py-2">
        Brie, a Product Marketing Manager at Zoob, knows that the company
        <span>&#39;</span>s paid product has a killer feature that Hey There!
        lacks: the ability to use AI to add summaries with timestamps and links
        to recorded meetings. Brie discusses the idea of adding this feature to
        the free version of Zoob for a limited time with her colleague, Lexi, a
        PM working on the free version of the product. Lexi is excited about the
        idea and she writes up the following one-page Product Spec to act as a
        conversation starter to discuss the idea with the rest of her team and
        her manager:
      </div>
      <div className="m-2 p-2 lg:m-8 lg:p-8 border-2 rounded-none border-slate-500">
        <div className="w-10 mx-auto text-4xl font-bold text-red-500">
          DRAFT
        </div>
        <div className="mx-auto my-3 text-xl font-bold">
          Product Spec: Add AI Summaries + Links to Free Product for a Limited
          Time
        </div>
        <div className="mt-3">
          <b>Team:</b> Free Version, Team #2
        </div>
        <div>
          <b>Created:</b> August 3, 2023
        </div>
        <div>
          <b>Last Edited:</b> August 3, 2023
        </div>
        <div>
          <b>Document Owner:</b> Lexi Lewis
        </div>
        <div className="mt-4 text-xl font-bold">
          Which Key Result(s) will we impact by solving this problem?
        </div>
        <div className="mx-4">
          <ul className="list-disc list-inside">
            <li>Increase our market share by 10% by the end of 2023.</li>
            <li>Increase paid subscriptions by 20% by the end of 2023.</li>
          </ul>
        </div>
        <div className="mt-4 text-xl font-bold">Who are the target users?</div>
        <div className="mx-4">
          Users of the free version of the app, including new users who may be
          switching from a competitor.
        </div>
        <div className="mt-4 text-xl font-bold">
          What are the desired outcomes for target users?
        </div>
        <div className="mx-4">
          Giving users access to the AI Summaries + Links feature will allow
          users to quickly review meetings they did not attend, saving them time
          and giving them more freedom in their schedules, while still allowing
          them to stay informed.
        </div>
        <div className="mt-4 text-xl font-bold">
          What are the desired outcomes for the business?
        </div>
        <div className="mx-4">
          <ul className="list-disc list-inside">
            <li>
              <b>Increase in market share.</b> Getting Hey There! users to try
              Zoob. Even if they do not convert to the paid version of Zoob at
              the end of the trial period, we believe that by getting them to
              try Zoob, they will appreciate the improved call quality and the
              convenience of our user experience enough to switch from Hey
              There!, thereby increasing our overall market share.
            </li>
            <li>
              <b>Increase in paid subscriptions.</b> Show all free users the
              power and convenience of the AI Summaries + Links feature to
              convince them to convert to the paid version of Zoob at the end of
              the free trial period.
            </li>
          </ul>
        </div>
        <div className="mt-4 text-xl font-bold">
          What is the value hypothesis?
        </div>
        <div className="mx-4">
          <ul className="list-disc list-inside">
            <li>
              Users will have more freedom in their schedules and will be better
              able to stay informed of what has happened in meetings they could
              not attend.
            </li>
            <li>
              For the business, our research indicates:
              <ul className="list-disc list-inside ml-4">
                <li>
                  ~25% of Hey There! users who use the free version of Zoob for
                  3 or more calls will continue using Zoob
                </li>
                <li>
                  ~20% of users who use the AI Summaries + Links feature at
                  least three times will convert to the paid version of Zoob
                </li>
                <li>
                  ~45% of users will use the AI Summaries + Links feature three
                  times in a month
                </li>
                <li>
                  ~75% of users will use the AI Summaries + Links feature three
                  times in 2 months
                </li>
              </ul>
            </li>
          </ul>
          Based on these numbers, we recommend giving users access to the AI
          Summaries + Links feature for 2 months. If we do, we expect to see an
          11% increase in our market share and a 20% increase in paid
          subscriptions.
        </div>
        <div className="mt-4 text-xl font-bold">
          What is the estimated cost?
        </div>
        <div className="mx-4">
          This solution is well-defined. Giving free app users access to the AI
          Summaries + Links feature for a limited time can be completed within a
          single sprint. We already have the ability to measure all of the
          success metrics listed below.
        </div>
        <div className="mt-4 text-xl font-bold">
          How will we measure success?
        </div>
        <div className="ml-3">
          <b>Primary</b>
          <ul className="list-disc list-inside">
            <li>Our market share before, during and after the trial period.</li>
            <li>
              Hey There!<span>&#39;</span>s market share before, during and
              after the trial period.
            </li>
            <li>
              Count of conversions from free to paid for all free app users.
            </li>
            <li>
              Count of conversions from free to paid for free app users who also
              used the AI Summaries + Links feature.
            </li>
          </ul>
          <b>Secondary</b>
          <ul className="list-disc list-inside">
            <li>
              Count of new users of the free version of the app during the trial
              period.
            </li>
            <li>
              Count of the number of times the AI Summaries + Links feature was
              used by free app users.
            </li>
            <li>DAU/MAU for all free app users.</li>
            <li>
              DAU/MAU for free app users who downloaded the app after the trial
              period began.
            </li>
            <li>
              DAU/MAU for free app users who accessed the AI Summaries + Links
              feature at least once.
            </li>
          </ul>
        </div>
        <div className="mt-4 text-xl font-bold">What is the cost of delay?</div>
        <div className="mx-4">
          We will miss out on the revenue from the additional paid subscriptions
          and our market share is likely to continue to erode.
        </div>
        <div className="mt-4 text-xl font-bold">
          What are the constraints and dependencies?
        </div>
        <div className="mx-4">None</div>
        <div className="mt-4 text-xl font-bold">
          What are the assumptions and what is the experimentation plan?
        </div>
        <div className="mx-4">
          Assumptions are set forth in the value hypothesis section. All
          assumptions are based on internal research and testing. No additional
          testing of assumptions is warranted at this time.
        </div>
        <div className="mt-4 text-xl font-bold">What is the launch plan?</div>
        <div className="mx-4">
          Marketing wants one month to prepare prior to launch. We can develop
          and test this solution contemporaneously and be ready to launch at the
          end of one month. We propose an October 1st launch date. Free users
          will have immediate access to AI Summaries + Links. New users signing
          up between October 1 and December 31, 2023, will have access to the
          feature for 60 days following sign up.
        </div>
      </div>
    </div>
  )
}
