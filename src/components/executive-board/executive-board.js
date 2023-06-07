import * as React from 'react';
import { BoardMember } from './board-member';
export const ExecutiveBoard = () => {
    return (
        <div className="text-white bg-gray-900">
            <div className="hl"></div>
            <div className="px-[10%]">
                <h1 className="py-4 text-center text-5xl">
                    Orangevale History Project
                </h1>
                <h1 className="py-4 text-center text-5xl">Executive Board</h1>
                <div className="hl pb-8 mb-4" />
                <BoardMember
                    name="Mark Aring"
                    role="President"
                    professional="Mark has spent the last 25+ years in the Information Technology sector
                with Hewlett Packard Enterprise. His current role is Account Support Manager supporting State
                of California Agencies using HPE solutions. Although he is in technology, his first love is history
                as he holds a BA from CSUS in that field of study."
                    volunteer="Prior to his role as President of the Orangevale History Project, Mark has
                been heavily involved in community events including creating and managing the first Adventure
                Church Father’s Day Car Show launched in 2013. This event continues to grow each year and
                is a favorite activity for thousands. Mark is also part of the Orangevale Community Council and
                enjoys participating in the Big Day of Service with his family."
                />
                <BoardMember
                    name="Katherine &ldquo;Kay&rdquo; Barnes"
                    role="Vice President"
                    professional="Kay spent 31 years working for Pacific Bell as a Business Office
                Supervisor managing service agents for 15 years. In my final 10 years I was given the
                opportunity to become proficient in Call Center managing which was just emerging. Working
                within the region to statewide from budgeting, scheduling, and monitoring Call Centers."
                    volunteer="Was heavily involved in the 4-H program for over 30 years, Local – project
                leader, Club Leader of Eureka 4-H 100 member club, County – Placer County President and
                Regional Representative to State Council and Secretary of the State Council. Supported school
                events at Louis Pasteur Middle and Casa Roble Fundamental High Schools."
                />
                <BoardMember
                    name="Mary Witcraft"
                    role="Secretary"
                    professional="Mary spent 28 years working for the California Chiropractic Association
                in the areas of governmental affairs, membership and district liaison. She assisted districts
                (geographic areas) to set up their own meetings, develop bylaws and communication channels
                to network with other professionals. In her final 10 years in continuing education with the last 5
                years as the Manager, she put together budgets and programs for doctors to keep their licenses
                current with the latest education to provide greater assistance to their patients."
                    volunteer="In early work years with interests in genealogy and history, Mary held every
                officer role including president with the Genealogical & Historical Council of Sacramento Valley.
                Retiring in 2021 and wanting to give back to the community, Mary joined and became the
                Newsletter Editor for the Orangevale Woman’s Club. Now also Secretary for the Orangevale
                History Project, she is managing the goals and to-do lists as well as contributing with grant
                writing."
                />
                {/* <BoardMember
                    name="Charlotte Billings"
                    role="Treasurer"
                    professional="Construction Technician for Axis Consulting, Inc. Charlotte has worked in
                a wide variety of fields, but predominantly in positions that depend on her paralegal training.
                Prior to relocating to the Orangevale area, Charlotte held the position of Market Manager for the
                Napa Farmers’ Market, which she grew from a small, tired,fading market into one of the most
                celebrated and recognized farmers’ markets in Northern California."
                    volunteer="Napa County Master Gardeners (now inactive) As Treasurer of the
                Orangevale History Project, Charlotte executed the organization’s filing needs, securing
                California Secretary of State registration, and in turn, IRS approval of 501(c)3 status."
                /> */}
                <BoardMember
                    name="Marilyn Edwards"
                    role="Membership Coordinator"
                    professional="Registered Nurse, Certified Case Manager\n
                Marilyn’s career as a hospital nurse spanned a total of 22 years in several hospital settings.
                The final 24 years, she practiced as a certified field Nurse Case Manager for persons with
                catastrophic illnesses and injuries including traumatic brain and spinal cord injuries in No. CA
                and No. Nevada. The scope of practice required the assessment of the patient’s current medical
                team and to facilitate the inclusion of additional specialists and resources to meet the specific
                medical and rehabilitation needs of each patient."
                    volunteer="Orangevale History Project – Founding member, Membership Coordinator
                General Federation of Women’s Clubs, Orangevale Woman’s Club –(community service club)
                President, 2nd Vice President (membership and publicity), Secretary, Chair of several
                committees Northern CA Chapter of the Case Management Society of America – Co-founder
                Sacramento Chapter of the Case Management Society of America – President."
                />
                <BoardMember
                    name="David Royal Dill"
                    role="Technology Coordinator"
                    professional="David has 34+ years in the Industrial and Commercial Refrigeration,
                Heating, Ventilation, and Air Conditioning Trade. He specializes in Supermarket
                Refrigeration, Cold Storage Facilities and Precision Environmental Controls for Data Center
                Infrastructures. He is licensed and certified from Vertiv Liebert, Data Aire Incorporated,
                McQuay Air Conditioning and Yamas Controls Incorporated. David also is a veteran whom
                served in the United States Air Force for 8 years. He is also serving as a current member of
                ASHRAE, Refrigeration Service Engineers Society and SMACNA in his field. His current
                position of 18+ years is at CalPERS Headquarters as an Facilities Engineer."
                    volunteer="Prior to his role of Information Technology on the Orangevale History
                Project, David owns his own Audio Visual Business – END Audio Visual and has assisted
                with Audio Visual Technology for Lakeside Church and Pathway Fellowship Churches. He
                also helps military veterans with TBI’s and PTSD’s by cycling on MTB, Gravel, Cyclocross
                and Road Racing. David is currently a member of the following teams; We Are Project Hero,                
                Red White &amp; Blue and CocoNUTS Cycling Teams."
                />
                <BoardMember
                    name="Deanna Maddock"
                    role="Fundraising Coordinator"
                    professional="Life Insurance Agent. This new career is just the start of fulfilling her passion 
                    for helping people. In just a short time as an agent, she has been able to help many businesses, 
                    individuals and families protect what matters most by providing attention to detail service. 
                    Her career change was a blessing in disguise as it has allowed for a flexible schedule and has 
                    opened new doors for her to be more involved in her community - a longtime passion of hers! Even 
                    Her background for the past 22 years has been in the restaurant industry where she gained most of her experience of managing, delegating, 
                    communicating and staying organized."
                    volunteer="Rotary Club International-Orangevale, Fair Oaks-Orangevale Food Bank, Volunteer 
                    Big Day of Service - Orangevale Volunteer, BNI Business Networking International 
                    Member."
                />
                <BoardMember
                    name="Jerry Macklem"
                    role="Parliamentarian"
                    professional="Area Manager 20 years for Industrial Uniform Co. - Locations and full
                    operating plants in Sacramento and Salt Lake City. Offices and Depots in Carson City, Nevada,
                    San Jose, San Francisco and Marin. In charge of all P&amp;L reports, employees, union contracts,
                    arbitrations for other Industrial Uniform Companys in CA. ILL Route Instructor and Customer
                    Service. Customer Service Manager 20 years as for Hunt &amp; Sons Distributor."
                    volunteer="Very involved with Orangevale Grange for over 26 years: Past President for 8 years, Vice
                    President for over 4 years. Now involved with CA State Grange as Field Rep helping other
                    Granges in CA. Was involved with the first fundraiser for the Orangevale Food Bank. The
                    Orangevale Grange, along Dairy Queen, started the Orangevale Farmers Market. Currently
                    working with the Orangevale History Project."
                />
                <br />
            </div>
        </div>
    );
};
