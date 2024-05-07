import { NextRequest, NextResponse } from "next/server";
import shopify from "shopify-api-node";
export async function POST(req, res) {
  // const { apiKey } = req.body;
  function generateUniqueCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    return code;
  }
  const reqBody = await req.json();
  console.log("request body", reqBody);
  console.log("token", reqBody.accessToken); //shopName
  try {
    // Create a new Shopify API instance with the provided API key
    const shop = new shopify({
      shopName: reqBody.shopName,
      accessToken: reqBody.accessToken,
    });


    // Define the discount code properties

    const priceRuleData = {
      title: "SummerSale",
      target_type: "line_item",
      target_selection: "all",
      allocation_method: "across",
      value_type: "percentage",
      value: "-20",
      customer_selection: "all",
      starts_at: new Date(),
    };

    // const res0 = await shop.product.list({ limit: 5 });
    // console.log(res0);

    const getPricerule = async () => {
      const response1 = await shop.priceRule.create(priceRuleData);
      console.log(response1.id);
      return response1.id;
    };

    const discountCodeData = {
      code: generateUniqueCode(),
      value: "20",
      value_type: "percentage",
      usage_limit: null,
      starts_at: new Date(),
      ends_at: null,
      applies_to_all_products: true,
      applies_to_resource: "order",
      duration: "forever",
    };

    const response = await shop.discountCode.create(
      getPricerule(),
      discountCodeData
    );
    console.log(response);
    return NextResponse.json({ code: response.code }, { status: 200 });
    return;
    // res.status(200).json({ discountCode: response.discount_code });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
    console.error("Error creating discount code:", error.response.body);
    // res
    //   .status(500)
    //   .json({ error: "An error occurred while creating the discount code." });
  }
}