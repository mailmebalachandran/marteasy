import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from '../../components/Header/Header';
import styles from '../../screens/FAQScreen/styles';

class FAQScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigationScreenValue="FAQ's"
                    navigateValue="HomeScreen"
                    navigation={this.props.navigation}
                />
                <ScrollView>
                    <View>

                        <Text style={styles.heading}>Frequently Asked Questions:</Text>
                        <Text style={styles.uppercaseHeading}>REGISTRATION</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>How do I register?</Text>
                        <Text style={styles.answer}>
                            You can register by clicking on the "Register" button on the Mart Easy app or on its website ie www.marteasy.in. Please provide the information in the form that appears. You can review the terms and conditions, provide your payment mode details and submit the registration information.
                        </Text>

                        <Text style={styles.question}>Are there any charges for registration?</Text>
                        <Text style={styles.answer}>No. Registration on Mart Easy app is absolutely free.</Text>

                        <Text style={styles.question}>Do I have to necessarily register to shop on Mart Easy?</Text>
                        <Text style={styles.answer}>
                            You can surf and add products to the cart without registration but only registered shoppers will be able to checkout and place orders. Registered members have to be logged in at the time of checking out the cart, they will be prompted to do so if they are not logged in.
                        </Text>

                        <Text style={styles.question}>Can I have multiple registrations?</Text>
                        <Text style={styles.answer}>
                            Each email address and contact phone number can only be associated with one Mart Easy account.
                        </Text>

                        <Text style={styles.question}>Can I add more than one delivery address in an account?</Text>
                        <Text style={styles.answer}>
                            Yes, you can add multiple delivery addresses in your Mart Easy account. However, remember that all items placed in a single order can only be delivered to one address. If you want different products delivered to different address you need to place them as separate orders.
                        </Text>

                        <Text style={styles.question}>Can I have multiple accounts with same mobile number and email id?</Text>
                        <Text style={styles.answer}>
                            Each email address and phone number can be associated with one Mart Easy account only.
                        </Text>

                        <Text style={styles.question}>
                            Can I have multiple accounts for members in my family with different mobile number and email address but same or common delivery address?</Text>
                        <Text style={styles.answer}>
                            Yes, we do understand the importance of time and the toil involved in shopping groceries and other daily needs. Up to three members in a family can have the same address provided the email address and phone number associated with the accounts are unique.
                        </Text>

                        <Text style={styles.question}>
                            Can I have different addresses under one account and still place orders for multiple locations?</Text>
                        <Text style={styles.answer}>Yes, you can place orders for multiple available locations.</Text>

                        <Text style={styles.uppercaseHeading}>
                            ACCOUNT RELATED</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>What is My Account?</Text>

                        <Text style={styles.answer}>
                            My Account is the section you reach after you log in at Mart Easy. My Account allows you to track your active orders, credit note details as well as see your order history and update your contact details.
                        </Text>

                        <Text style={styles.question}>
                            How do I reset my password?</Text>
                        <Text style={styles.answer}>
                            You need to enter your email address on the Login page and click on forgot password. An email with a reset password will be sent to your email address. With this, you can change your password. In case of any further issues please contact our customer support team.
                        </Text>

                        <Text style={styles.question}>
                            What is My Shopping List?</Text>

                        <Text style={styles.answer}>
                            My Shopping List is a comprehensive list of all the items previously ordered by you on Mart Easy app. This enables you to shop quickly and easily in future.
                    </Text>


                        <Text style={styles.uppercaseHeading}>PAYMENT</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>
                            What are the modes of payment?</Text>

                        <Text style={styles.singleparagraph}>You can pay for your order on Mart Easy app using the following modes of payment:</Text>
                        <Text style={styles.singleparagraph}>a. Cash on delivery</Text>
                        <Text style={styles.singleparagraph}>b. Credit and debit cards (VISA / Mastercard / Rupay)</Text>
                        <Text style={styles.singleparagraph}>C. UPI’s</Text>


                        <Text style={styles.question}>
                            Are there any other charges or taxes in addition to the price shown? Is VAT added to the invoice?</Text>

                        <Text style={styles.answer}>
                            There is no VAT. However, GST will be applicable as per Government Regulations.
                    </Text>

                        <Text style={styles.question}>
                            Is it safe to use my credit/ debit card on Mart Easy? </Text>
                        <Text style={styles.answer}>
                            Yes it is absolutely safe to use your card on Mart Easy app. A recent directive from RBI makes it mandatory to have an additional authentication pass code verified by VISA (VBV) or MSC (Master Secure Code) which has to be entered by online shoppers while paying online using visa or master credit card. It means extra security for customers, thus making online shopping safer

                    </Text>

                        <Text style={styles.question}>
                            What is the meaning of cash on delivery?</Text>
                        <Text style={styles.answer}>
                            Cash on delivery means that you can pay for your order at the time of order delivery at your doorstep.

                    </Text>

                        <Text style={styles.question}>
                            If I pay by credit card how do I get the amount back for items not delivered?</Text>
                        <Text style={styles.answer}>
                            If we are not able to delivery all the products in your order and you have already paid for them online, the balance amount will be refunded to your Mart Easy account as store credit and you can use it at any time against your future orders. Should you want it to be credited to your bank account please contact our customer support team and we will refund it back on to your card.
                    </Text>

                        <Text style={styles.question}>
                            Where do I enter the coupon code?</Text>
                        <Text style={styles.answer}>
                            Once you are done selecting your products and click on checkout you will be prompted to select delivery slot and payment method. On the payment method page there is a box where you can enter any evoucher/ coupon code that you have. The amount will automatically be deducted from your invoice value.
                    </Text>

                        <Text style={styles.question}>
                            What is Mart Easy Wallet?(Coming Soon)</Text>
                        <Text style={styles.answer}>
                            Once you are done selecting your products and click on checkout you will be prompted to select delivery slot and payment method. On the payment method page there is a box where you can enter any evoucher/ coupon code that you have. The amount will automatically be deducted from your invoice value.
                    </Text>

                        <Text style={styles.uppercaseHeading}>Delivery Related</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>
                            When will I receive my order?</Text>
                        <Text style={styles.answer}>
                            Once you are done selecting your products and click on checkout you will be prompted to select delivery slot. Your order will be delivered to you on the day and slot selected by you.
                    </Text>

                        <Text style={styles.question}>
                            How are the fruits and vegetables packaged?</Text>
                        <Text style={styles.answer}>
                            Fresh fruits and vegetables are hand picked, hand cleaned and hand packed.
                    </Text>

                        <Text style={styles.question}>
                            How are the fruits and vegetables weighed?</Text>
                        <Text style={styles.answer}>
                            Every fruit and vegetable varies a little in size and weight. While you shop we show an estimated weight and price for everything priced by kilogram. At the time of delivery we weigh each item to determine final price. This could vary by 10% at maximum. Therefore if you have shopped for something that costs Rs. 100 per kg, and we delivery 1.5 kg of the product to you (eg cabbage, pineapple), you will still be charged a maximum of Rs. 110. In case the weight of the product is lesser than what you ordered, you will pay correspondingly less.
                    </Text>

                        <Text style={styles.question}>
                            How will the delivery be done?</Text>
                        <Text style={styles.answer}>
                            We have a dedicated team of delivery personnel and a fleet of vehicles operating across the city which ensures timely and accurate delivery to our customers.
                    </Text>


                        <Text style={styles.question}>
                            How do I change the delivery info (address to which I want products delivered)?</Text>
                        <Text style={styles.answer}>
                            You can change your delivery address on our website once you log into your account. Click on "My Account" at the top right hand corner and go to the "Update My Profile" section to change your delivery address.
                    </Text>

                        <Text style={styles.question}>
                            How much are the delivery charges?</Text>
                        <Text style={styles.answer}>
                            Delivery charges in Rs 50
                    </Text>


                        <Text style={styles.question}>
                            Do you deliver in my area?</Text>
                        <Text style={styles.answer}>
                            You will be able to check this detail at the time of checkout when you enter the address. If we are unable to deliver in your area - we will inform you before checkout.
                    </Text>

                        <Text style={styles.question}>
                            Will someone inform me if my order delivery gets delayed?</Text>
                        <Text style={styles.answer}>
                            In case of a delay, our customer support team will keep you updated about your delivery.
                    </Text>

                        <Text style={styles.question}>
                            What is the minimum order for delivery?</Text>
                        <Text style={styles.answer}>
                            There is no minimum order for delivery but we charge a nominal delivery charge of Rs 50.
                    </Text>

                        <Text style={styles.uppercaseHeading}>ORDER RELATED</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>
                            What are delivery slots?</Text>
                        <Text style={styles.answer}>
                            Delivery slots are time slots during which you will receive your order. Mart Easy currently offers 4 delivery slots each day. These are:
                    </Text>

                        <Text style={styles.singleparagraph}>Slot 1 - 9:30 AM to 12:00 pm.</Text>
                        <Text style={styles.singleparagraph}>Slot 2 – 12:00 pm to 2:30 pm.</Text>
                        <Text style={styles.singleparagraph}>Slot 3 – 2:30 pm to 5:00 pm.</Text>
                        <Text style={styles.singleparagraph}>Slot 4 – 5:00pm to 7:30pm</Text>


                        <Text style={styles.question}>
                            What is a cut-off time and what are the corresponding cut-off timing for each slot?</Text>
                        <Text style={styles.answer}>
                            Cut off time is the time after which the order gets processed for delivery. After this time you will not be able to modify or cancel your order, cut off time for Slot 3 & Slot 4 is 12 noon on the same day and cut off time for Slot 1 & Slot 2 is 7 pm on the previous day.
                    </Text>

                        <Text style={styles.question}>
                            Can I add products after the cut off time for a slot?</Text>

                        <Text style={styles.answer}>
                            No, you will not be able to make any changes to your order after the cut off time for your selected slot. However, if you do not wish to buy a product you may return it at the time of delivery and the amount will be credited to your Mart Easy account.
                    </Text>

                        <Text style={styles.question}>
                            How can I check availability of next slot before placing order?</Text>

                        <Text style={styles.answer}>
                            Once you log in to your account, you will notice the next available slot in which you can order will be displayed.
                    </Text>

                        <Text style={styles.question}>
                            Can I change my order delivery slot after placing the order?</Text>

                        <Text style={styles.answer}>
                            Delivery slot cannot be changed once the order is placed. In case of an urgent requirement of change of slot please contact our customer support team and we will try our best to accommodate your request.
                    </Text>

                        <Text style={styles.question}>
                            How do I add or remove products after placing my order?</Text>

                        <Text style={styles.answer}>
                            Once you have placed your order you will not be able to make modifications on the website. Please contact our customer support team for any modification of order.
                    </Text>

                        <Text style={styles.question}>
                            How long will my chosen slot be blocked for me?</Text>

                        <Text style={styles.answer}>
                            5 minutes. After this the slot will be released for other shoppers on the app.
                    </Text>

                        <Text style={styles.question}>
                            Is it possible to order an item which is out of stock?</Text>

                        <Text style={styles.answer}>
                            No you can only order products which are in stock. We try to ensure availability of all products on our website however due to supply chain issues sometimes this is not possible
                    </Text>


                        <Text style={styles.question}>
                            How do I check the current status of my order?</Text>

                        <Text style={styles.answer}>
                            The only way you can check the status of your order is by contacting our customer support team.
                    </Text>


                        <Text style={styles.question}>
                            How do I check which items were not available from my order? Will someone inform me about the items unavailable in my order before delivery?</Text>

                        <Text style={styles.answer}>
                            You will receive an email as well as an sms about unavailable items before the delivery of your order.
                    </Text>

                        <Text style={styles.question}>
                            Why is there an order cancellation fee?</Text>

                        <Text style={styles.answer}>
                            We charge an order cancellation fee to compensate for the slot, time and effort incurred towards processing an order.
                        </Text>
                        <Text style={styles.answer}>
                            Every order placed has to undergo a system driven process as well as a manual process in order to make sure the order reaches our customers on time, every time. For this purpose, a slot is booked for every order that gets placed in our system and the order picking process happens seamlessly. In this entire process we incur labor as well as an opportunity cost on the booked slot. During the event of a cancellation the entire process has to be stopped and reset. This takes up considerable processing time to open the slot yet again for another customer to order.
                        </Text>


                        <Text style={styles.question}>
                            What You Receive Is What You Pay For?</Text>

                        <Text style={styles.answer}>
                            At the time of delivery, we advise you to kindly check every item as in the invoice. Please report any missing item that is invoiced. As a benefit to our customers, if you are not available at the time of order delivery or you haven’t checked the list at the time of delivery we provide a window of 24hrs to report missing items. This is applicable only for items that are invoiced.
                        </Text>

                        <Text style={styles.question}>
                            When and how can I cancel an order?</Text>

                        <Text style={styles.answer}>
                            You can cancel an order before the cut off time of your slot (1 pm for evening slots and 6 am for morning slots) by contacting our customer support team or you can also cancel your order from the Customer Service section on the Mart Easy app.
                        </Text>


                        <Text style={styles.uppercaseHeading}>
                            CUSTOMER RELATED</Text>


                        <Text style={styles.mainHeadingAfterQuestion}>
                            How do I contact customer service?</Text>

                        <Text style={styles.answer}>
                            Our customer service team is available throughout the week, all seven days from 8 am to 8 pm. They can be reached at <Text style={styles.mobileNumber}>+91 7063911377</Text> or via email at <Text style={styles.email}>customercare@marteasy.in</Text>
                        </Text>


                        <Text style={styles.question}>
                            What are your timings to contact customer service?</Text>

                        <Text style={styles.answer}>
                            Our customer service team is available throughout the week, all seven days from  8am to 8pm.
                        </Text>


                        <Text style={styles.question}>
                            How can I give feedback on the quality of customer service?</Text>

                        <Text style={styles.answer}>
                            Our customer support team constantly strives to ensure the best shopping experience for all our customers. We would love to hear about your experience with Mart Easy. Do write to us feedback@marteasy.in in case of positive or negative feedback.
                        </Text>

                        <Text style={styles.question}>
                            How do I raise a claim with customer service for any of the Guarantees - Delivery Guarantee, Quality Guarantee?</Text>

                        <Text style={styles.answer}>
                            If you face any issues with price, quality or delivery of products we will take every measure to address the issue and make it up to you. Please contact our customer support team with details or your order as well as the issue you faced.
                        </Text>

                        <Text style={styles.uppercaseHeading}>RETURN & REFUND</Text>

                        <Text style={styles.mainHeadingAfterQuestion}>Return - Refund</Text>

                        <Text style={styles.answer}>
                            We have a "no questions asked return and refund policy" which entitles all our members to return the product at the time of delivery if due to some reason they are not satisfied with the quality or freshness of the product. We will take the returned product back with us and issue a credit note for the value of the return products which will be credited to your account on the Site. This can be used to pay your subsequent shopping bills.</Text>

                        <Text style={styles.question}>Return Policy - Time Limits:</Text>

                        <Text style={styles.singleparagraph}>1. Perishable goods: Within 24  hours from the delivery date</Text>

                        <Text style={styles.lastLine}>2. Other goods : Within 48 hours from the delivery date.</Text>


                    </View>


                </ScrollView>
            </View>

        )
    }
}

export default FAQScreen;