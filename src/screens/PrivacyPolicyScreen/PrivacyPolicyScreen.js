import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from '../../components/Header/Header';
import styles from './styles';
class PrivacyPolicyScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
            <Header
                navigationScreenValue="Privacy Policy"
                navigateValue="HomeScreen"
                navigation={this.props.navigation}
            />
            <ScrollView>
                <View>
                    <Text style={styles.heading}>Privacy Policy</Text>

                    <Text style={styles.answer}>Mart East LLP (“MELLP”) is the licensed owner of the brand Mart Easy and the website
                    marteasy.in (”The Site”). MELLP respects your privacy. This Privacy Policy provides
                    succinctly the manner your data is collected and used by MELLP on the Site. As a visitor to
                    the Site/ Customer you are advised to please read the Privacy Policy carefully.
                    By accessing the services provided by the Site you agree to the collection and use of your
                    data by MELLP in the manner provided in this Privacy Policy.
                    </Text>

                    <Text style={styles.question}>
                        What information is, or may be, collected form you?</Text>

                    <Text style={styles.answer}>As part of the registration process on the
                    Site, MELLP may collect the following personally identifiable information about you: Name
                    including first and last name, alternate email address, mobile phone number and contact details,
                    Postal code, Demographic profile (like your age, gender, occupation, education, address etc.) and
                    information about the pages on the site you visit/access, the links you click on the site, the
                    number of times you access the page and any such browsing information.
                    </Text>

                    <Text style={styles.question}>
                        How do we Collect the Information ?</Text>

                    <Text style={styles.answer}>
                        MELLP will collect personally identifiable information about you only as part of a voluntary
                        registration process, on-line survey or any combination thereof. The Site may contain links to
                        other Web sites. MELLP is not responsible for the privacy practices of such Web sites which it
                        does not own, manage or control. The Site and third-party vendors, including Google, use
                        first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the
                        DoubleClick cookie) together to inform, optimize, and serve ads based on someone's past visits
                        to the Site.
                    </Text>

                    <Text style={styles.question}>
                        How is information used ?</Text>

                    <Text style={styles.answer}>
                        MELLP will use your personal information to provide personalized features to you on the Site
                        and to provide for promotional offers to you through the Site and other channels. MELLP will also
                        provide this information to its business associates and partners to get in touch with you when
                        necessary to provide the services requested by you. MELLP will use this information to preserve
                        transaction history as governed by existing law or policy. MELLP may also use contact information
                        internally to direct its efforts for product improvement, to contact you as a survey respondent,
                        to notify you if you win any contest; and to send you promotional materials from its contest
                        sponsors or advertisers. MELLP will also use this information to serve various promotional and
                        advertising materials to you via display advertisements through the Google Ad network on third party
                        websites. You can opt out of Google Analytics for Display Advertising and customize Google Display
                        network ads using the Ads Preferences Manager. Information about Customers on an aggregate
                        (exlcuding any information that may identify you specifically) covering Customer transaction
                        data and Customer demographic and location data may be provided to partners of MELLP for the
                        purpose of creating additional features on the website, creating appropriate merchandising or
                        creating new products and services and conducting marketing research and statistical analysis of customer behaviour and transactions.
                    </Text>

                    <Text style={styles.question}>
                        With whom your information will be shared?</Text>

                    <Text style={styles.answer}>
                        MELLP will not use your financial information for any purpose other than to complete a
                        transaction with you. MELLP does not rent, sell or share your personal information and will not
                        disclose any of your personally identifiable information to third parties. In cases where it
                        has your permission to provide products or services you've requested and such information is
                        necessary to provide these products or services the information may be shared with MELLP’s
                        business associates and partners. MELLP may, however, share consumer information on an
                        aggregate with its partners or third parties where it deems necessary. In addition MELLP
                        may use this information for promotional offers, to help investigate, prevent or take
                        action regarding unlawful and illegal activities, suspected fraud, potential threat to
                        the safety or security of any person, violations of the Site’s terms of use or to
                        defend against legal claims; special circumstances such as compliance with subpoenas,
                        court orders, requests/order from legal authorities or law enforcement agencies
                        requiring such disclosure.
                    </Text>

                    <Text style={styles.question}>
                        What Choice are available to you regarding collection, use and distribution of your information ?</Text>

                    <Text style={styles.answer}>
                        To protect against the loss, misuse and alteration of the information under its control, MELLP
                        has in place appropriate physical, electronic and managerial procedures. For example, MELLP
                        servers are accessible only to authorized personnel and your information is shared with
                        employees and authorised personnel on a need to know basis to complete the transaction and to
                        provide the services requested by you. Although MELLP will endeavour to safeguard the
                        confidentiality of your personally identifiable information, transmissions made by means of
                        the Internet cannot be made absolutely secure. By using this site, you agree that MELLP
                        will have no liability for disclosure of your information due to errors in transmission or
                        unauthorized acts of third parties.
                    </Text>

                    <Text style={styles.question}>
                        How can you correct inaccuracies in the information ?</Text>

                    <Text style={styles.answer}>
                        To correct or update any information you have provided, the Site allows you to do it online.
                     In the event of loss of access details you can send an e-mail to: <Text style={styles.email}>customercare@marteasy.in</Text>
                    </Text>

                    <Text style={styles.question}>
                        Policy updates</Text>

                    <Text style={styles.answer}>
                        MELLP reserves the right to change or update this policy at any time. Such changes shall be
                        effective immediately upon posting to the Site.
                    </Text>

                    <Text style={styles.question}>
                        Contact Information</Text>

                    <Text style={styles.singleparagraph}>Mart Easy LLP</Text>
                    <Text style={styles.singleparagraph}>57, M.A. Road</Text>
                    <Text style={styles.singleparagraph}>Phoenix Bay, Port Blair,</Text>
                    <Text style={styles.singleparagraph}>A&N Islands, Pincode: 744101</Text>
                    <Text style={styles.singleparagraph}>Tel.: +918001186060/+917063911377</Text>
                    <Text style={styles.lastLine}>Email id: <Text style={styles.email}>customercare@marteasy.in</Text></Text>

                </View>
            </ScrollView>
            </View>

        )
    }
}

export default PrivacyPolicyScreen;