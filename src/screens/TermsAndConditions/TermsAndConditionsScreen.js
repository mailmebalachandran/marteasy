import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from '../../components/Header/Header';
import styles from "./styles";

class TermsAndConditionsScreen extends Component {

    render() {
        return (
            <View>
                <Header
                    navigationScreenValue="Terms & Conditions"
                    navigateValue="HomeScreen"
                    navigation={this.props.navigation}
                />
                <ScrollView>
                    <View>
                        <Text style={styles.heading}>Terms and Conditions</Text>

                        <Text style={styles.question}>Personal Information</Text>

                        <Text style={styles.answer}>
                            Mart Easy LLP (“MELLP”) is the licensed owner of the brand Mart Easy and the website
                            www.marteasy.in (”The Site”) . MELLP respects your privacy. This Privacy Policy provides
                            succinctly the manner your data is collected and used by MELLP on the Site. As a visitor to
                            the Site/ Customer you are advised to please read the Privacy Policy carefully. By
                            accessing the services provided by the Site you agree to the collection and use of your
                            data by MELLP in the manner provided in this Privacy Policy.
                    </Text>

                        <Text style={styles.question}>
                            Services overview</Text>

                        <Text style={styles.answer}>
                            As part of the registration process on the Site, MELLP may collect the following personally
                            identifiable information about you: Name including first and last name, alternate email
                            address, mobile phone number and contact details, Postal code, Demographic profile
                            (like your age, gender, occupation, education, address etc.) and information about the
                            pages on the site you visit/access, the links you click on the site, the number of times
                            you access the page and any such browsing information.
                    </Text>

                        <Text style={styles.question}>
                            Eligibility</Text>

                        <Text style={styles.answer}>
                            Services of the Site would be available to only select geographies in India. Persons who
                            are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including
                            un-discharged insolvents etc. are not eligible to use the Site. If you are a minor i.e.
                            under the age of 18 years but at least 13 years of age you may use the Site only under the
                            supervision of a parent or legal guardian who agrees to be bound by these Terms of Use.
                            If your age is below 18 years your parents or legal guardians can transact on behalf of
                            you if they are registered users. You are prohibited from purchasing any material which
                            is for adult consumption and the sale of which to minors is prohibited.
                    </Text>

                        <Text style={styles.question}>
                            License & Site access</Text>

                        <Text style={styles.answer}>
                            MELLP grants you a limited sub-license to access and make personal use of this site and not
                            to download (other than page caching) or modify it, or any portion of it, except with
                            express written consent of MELLP. This license does not include any resale or commercial
                            use of this site or its contents; any collection and use of any product listings,
                            descriptions, or prices; any derivative use of this site or its contents; any
                            downloading or copying of account information for the benefit of another merchant;
                            or any use of data mining, robots, or similar data gathering and extraction tools.
                            This site or any portion of this site may not be reproduced, duplicated, copied,
                            sold, resold, visited, or otherwise exploited for any commercial purpose without
                            express written consent of MELLP. You may not frame or utilize framing techniques
                            to enclose any trademark, logo, or other proprietary information (including images,
                            text, page layout, or form) of the Site or of MELLP and its affiliates without
                            express written consent. You may not use any meta tags or any other "hidden
                            text" utilizing the Site’s or MELLP’s name  name or trademarks without the
                            express written consent of MELLP. Any unauthorized use terminates the permission
                            or license granted by MELLP .
                    </Text>

                        <Text style={styles.question}>
                            Account & Registration Obligations</Text>

                        <Text style={styles.answer}>
                            All shoppers have to register and login for placing orders on the Site. You have to keep
                            your account and registration details current and correct for communications related to
                            your purchases from the site. By agreeing to the terms and conditions, the shopper
                            agrees to receive promotional communication and newsletters upon registration.
                            The customer can opt out either by unsubscribing in “My Account” or by contacting
                            the customer care.
                    </Text>

                        <Text style={styles.question}>
                            Pricing</Text>

                        <Text style={styles.answer}>
                            All the products listed on the Site will be sold at MRP unless otherwise specified. The
                            prices mentioned at the time of ordering will be the prices charged on the date of the
                            delivery. Although prices of most of the products do not fluctuate on a daily basis
                            but some of the commodities and fresh food prices do change on a daily basis. In
                            case the prices are higher or lower on the date of delivery not additional charges
                            will be collected or refunded as the case may be at the time of the delivery of
                            the order.
                    </Text>

                        <Text style={styles.question}>
                            Cancellation by Site / Customer</Text>

                        <Text style={styles.answer}>
                            You as a customer can cancel your order anytime up to the cut-off time of the slot for
                            which you have placed an order by calling our customer care. In such a case we will
                            refund any payments already made by you for the order. If we suspect any fraudulent
                            transaction by any customer or any transaction which defies the terms & conditions
                            of using the website, we at our sole discretion could cancel such orders. We will
                            maintain a negative list of all fraudulent transactions and customers and would
                            deny access to them or cancel any orders placed by them.
                        </Text>

                        <Text style={styles.question}>
                            Return & Refunds</Text>

                        <Text style={styles.answer}>
                            We have a "no questions asked return and refund policy" which entitles all our members
                            to return the product at the time of delivery if due to some reason they are not
                            satisfied with the quality or freshness of the product. We will take the returned
                            product back with us and issue a credit note for the value of the return products
                            which will be credited to your account on the Site. This can be used to pay your
                            subsequent shopping bills.
                    </Text>

                        <Text style={styles.question}>
                            You Agree and Confirm</Text>

                        <Text style={styles.answer}>
                            That in the event that a non-delivery occurs on account of a mistake by you
                            (i.e. wrong name or address or any other wrong information) any extra cost
                            incurred by MELLP for re-delivery shall be claimed from you.That you will use
                            the services provided by the Site, its affiliates, consultants and contracted companies,
                            for lawful purposes only and comply with all applicable laws and regulations while using
                            and transacting on the Site.You will provide authentic and true information in all
                            instances where such information is requested of you. MELLP reserves the right
                            to confirm and validate the information and other details provided by you at
                            any point of time. If upon confirmation your details are found not to be true
                            (wholly or partly), it has the right in its sole discretion to reject the
                            registration and debar you from using the Services and / or other affiliated websites without prior intimation whatsoever.
                            You authorise Mart Easy to contact you for any transactional purposes related to your order/account. That
                            you are accessing the services available on this Site and transacting at your sole risk and are using
                            your best and prudent judgment before entering into any transaction through this Site.
                            That the address at which delivery of the product ordered by you is to be made will be correct and proper
                            in all respects.That before placing an order you will check the product description carefully. By placing
                            an order for a product you agree to be bound by the conditions of sale included in the item's description.
                            You may not use the Site for any of the following purposes:
                            Disseminating any unlawful, harassing, libellous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material.
                            Transmitting material that encourages conduct that constitutes a criminal offence or results in civil liability or otherwise breaches any relevant laws, regulations or code of practice.
                            Gaining unauthorized access to other computer systems.
                            Interfering with any other person's use or enjoyment of the Site.
                            Breaching any applicable laws;
                            Interfering or disrupting networks or web sites connected to the Site.
                            Making, transmitting or storing electronic copies of materials protected by copyright without the permission of the owner.
                    </Text>
                        <Text style={styles.question}>
                            Colours</Text>
                        <Text style={styles.answer}>
                            We have made every effort to display the colours  of our products that appear on the
                            Website as accurately as possible. However, as the actual colours you see will depend on
                            your monitor, we cannot guarantee that your monitor's display of any colour will be accurate.
                    </Text>

                        <Text style={styles.question}>
                            Modification of Terms & Conditions of Service</Text>

                        <Text style={styles.answer}>
                            MELLP may at any time modify the Terms & Conditions of Use of the Website without any prior
                            notification to you. You can access the latest version of these Terms & Conditions at any
                            given time on the Site. You should regularly review the Terms & Conditions on the Site.
                            In the event the modified Terms & Conditions is not acceptable to you, you should
                            discontinue using the Service. However, if you continue to use the Service you shall
                            be deemed to have agreed to accept and abide by the modified Terms & Conditions of
                            Use of this Site.
                    </Text>

                        <Text style={styles.question}>
                            Governing Law and Jurisdiction</Text>

                        <Text style={styles.answer}>
                            This User Agreement shall be construed in accordance with the applicable laws of India. The Courts at Port Blair shall have exclusive jurisdiction in any proceedings arising out of this agreement.
                            Any dispute or difference either in interpretation or otherwise, of any terms of this User Agreement between the parties hereto, the same shall be referred to an independent arbitrator who will be appointed by MELLP and his decision shall be final and binding on the parties hereto. The above arbitration shall be in accordance with the Arbitration and Conciliation Act, 1996 as amended from time to time. The arbitration shall be held in Port Blair. The High Court of judicature at Port Blair alone shall have the jurisdiction and the Laws of India shall apply.

                    </Text>

                        <Text style={styles.question}>
                            Reviews, Feedback, Submissions</Text>

                        <Text style={styles.answer}>
                            All reviews, comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted or offered to the Site on or by this Site or otherwise disclosed, submitted or offered in connection with your use of this Site (collectively, the "Comments") shall be and remain the property of MELLP. Such disclosure, submission or offer of any Comments shall constitute an assignment to MELLP of all worldwide rights, titles and interests in all copyrights and other intellectual properties in the Comments. Thus, MELLP owns exclusively all such rights, titles and interests and shall not be limited in any way in its use, commercial or otherwise, of any Comments. MELLP will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display and distribute any Comments you submit for any purpose whatsoever, without restriction and without compensating you in any way. MELLP is and shall be under no obligation (1) to maintain any Comments in confidence; (2) to pay you any compensation for any Comments; or (3) to respond to any Comments. You agree that any Comments submitted by you to the Site will not violate this policy or any right of any third party, including copyright, trademark, privacy or other personal or proprietary right(s), and will not cause injury to any person or entity. You further agree that no Comments submitted by you to the Website will be or contain libellous or otherwise unlawful, threatening, abusive or obscene material, or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any form of "spam".
                            MELLP does not regularly review posted Comments, but does reserve the right (but not the obligation) to monitor and edit or remove any Comments submitted to the Site. You grant MELLP the right to use the name that you submit in connection with any Comments. You agree not to use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of any Comments you submit. You are and shall remain solely responsible for the content of any Comments you make and you agree to indemnify MELLP and its affiliates for all claims resulting from any Comments you submit. MELLP and its affiliates take no responsibility and assume no liability for any Comments submitted by you or any third party.
                    </Text>

                        <Text style={styles.question}>
                            Copyright & Trademark   </Text>
                        <Text style={styles.answer}>
                            MELLP , its suppliers and licensors expressly reserve all intellectual property rights in all text, programs, products, processes, technology, content and other materials, which appear on this Site. Access to this Website does not confer and shall not be considered as conferring upon anyone any license under any of MELLP or any third party's intellectual property rights. All rights, including copyright, in this website are owned by or licensed to MELLP . Any use of this website or its contents, including copying or storing it or them in whole or part, other than for your own personal, non-commercial use is prohibited without the permission of MELLP. You may not modify, distribute or re-post anything on this website for any purpose.
                            The names and logos and all related product and service names, design marks and slogans are the trademarks or service marks of MELLP, its affiliates, its partners or its suppliers. All other marks are the property of their respective companies. No trademark or service mark license is granted in connection with the materials contained on this Site. Access to this Site does not authorize anyone to use any name, logo or mark in any manner.
                            References on this Site to any names, marks, products or services of third parties or hypertext links to third party sites or information are provided solely as a convenience to you and do not in any way constitute or imply MELLP endorsement, sponsorship or recommendation of the third party, information, product or service.
                            MELLP is not responsible for the content of any third party sites and does not make any representations regarding the content or accuracy of material on such sites. If you decide to link to any such third party websites, you do so entirely at your own risk.
                            All materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials that are part of this Website (collectively, the "Contents") are intended solely for personal, non-commercial use. You may download or copy the Contents and other downloadable materials displayed on the Website for your personal use only. No right, title or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, any of the Contents, the Website or any related software. All software used on this Website is the property of MELLP or its licensees and suppliers and protected by Indian and international copyright laws. The Contents and software on this Website may be used only as a shopping resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance, of the Contents on this Website is strictly prohibited. Unless otherwise noted, all Contents are copyrights, trademarks, trade dress and/or other intellectual property owned, controlled or licensed by MELLP, one of its affiliates or by third parties who have licensed their materials to MELLP and are protected by Indian and international copyright laws. The compilation (meaning the collection, arrangement, and assembly) of all Contents on this Website is the exclusive property of  MELLP and is also protected by Indian and international copyright laws.

                    </Text>

                        <Text style={styles.question}>
                            Objectionable Material</Text>
                        <Text style={styles.answer}>
                            You understand that by using this Site or any services provided on the Site, you may encounter Content that may be deemed by some to be offensive, indecent, or objectionable, which Content may or may not be identified as such. You agree to use the Site and any service at your sole risk and that to the fullest extent permitted under applicable law,  MELLP and its affiliates shall have no liability to you for Content that may be deemed offensive, indecent, or objectionable to you.

                    </Text>

                        <Text style={styles.question}>
                            Indemnity</Text>
                        <Text style={styles.lastLine}>
                            This User Agreement shall be construed in accordance with the applicable laws of India. The Courts at Port Blair shall have exclusive jurisdiction in any proceedings arising out of this agreement. Any dispute or difference either in interpretation or otherwise, of any terms of this User Agreement between the parties hereto, the same shall be referred to an independent arbitrator who will be appointed by MELLP and his decision shall be final and binding on the parties hereto. The above arbitration shall be in accordance with the Arbitration and Conciliation Act, 1996 as amended from time to time. The arbitration shall be held in Port Blair. The High Court of judicature at Port Blair alone shall have the jurisdiction and the Laws of India shall apply.
                    </Text>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

export default TermsAndConditionsScreen;