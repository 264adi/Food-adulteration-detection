let btn=document.getElementById("soln");
btn.addEventListener("click",solnfordis);
function solnfordis()
{
    var dis=document.forms["form1"].disease.value; 
    var soln="Solution";
    if(dis=="Select")
    {
        document.getElementById("display").innerText="Select a Deficiency";
    }
    if(dis=="Protein")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Reddish pigmentation of hair and skin</li><li>Fatty Liver</li><li>Retardation of growth in children</li><li>Diarrhea</li><li>Dermatosis</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Meat</li><li>Fish</li><li>Poultry</li><li>Egg Yolk</li><li>Cheese</li><li>Yogurt</li><li>Legumes</li></ul>`;
    }
    if(dis=="Carbohydrate")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Less Energy</li><li>Constipation</li><li>Bad breath</li><li>Lossing weight has stopped</li><li>Feel hungry all the time</li><li>Mood swings</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Whole-grain breads</li><li>Cereals</li><li>Fortified/Enriched grain products</li><li>Potatoes</li><li>Corn</li><li>Legumes</li><li>Fruits & vegetables</li></ul>`;
    }
    if(dis=="Fat")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Low growth rate in infants</li><li>Lowered resistance in infection</li><li>Hair loss</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Protein-rich foods like-<ol><li>Meats</li><li>Diary Products</li><li>Egg Yolk</li><li>Nuts</li></ol><li>Butter</li><li>Margarine</li><li>Salad oils</li><li>Meat fats</li></ul>`;
    }
    if(dis=="Vitamin A")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Nigth blindness</li><li>Dry eyes</li><li>Poor bone growth</li><li>Impaired resistance to infection</li><li>Papillary</li><li>Hyperkeratosis of the skin</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Egg yolk</li><Dark Green & deep Yellow vegetables</li><li>Fruits</li></ul>`;
    }
    if(dis=="Vitamin B1")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Beriberi</li><li>Neuritis</li><li>Edema</li><li>Cardiac failure</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Lean pork</li><li>Wheat germ</li><li>Whole-grain and Enriched breads</li><li>All grained products</li><li>Cereal</li><li>Legumes</li><li>Potatoes</li></ul>`;
    }
    if(dis=="Vitamin B2")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Tiredness / fatigue</li><li>Constipstion</li><li>Loss of appetite</li><li>Weight loss</li><li>Numbness & tingling in the hands and feet</li><li>Poor memory</li><li>Soreness of the mouth/tongue</li></ul>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Meat</li><li>Diary product</li><li>Egg yolk</li><li>Green vegetables</li><li>Whole-grain breads</li><li>Cereals</li><li>Enriched grain product</li></ul>`;
    }
    if(dis=="Vitamin B6")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Microcytic anemia</li><li>Convulsions</li><li>Irritability</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Meat</li><li>Whole-grain breads</li><li>Cereals</li><Other grained products</li><li>Legumes</li><li>Potatoes</li></ul>`;
    }
    if(dis=="Vitamin B12")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Pernicious anemia</li><li>Neurologic</li><li>Deterioration</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Meat</li><li>Fish</li><li>Poultry</li><li>Cheese</li><li>Egg yolk</li><li>Liver</li></ul>`;
    }
    if(dis=="Vitamin C")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Scurvy</li><li>Pinpoint peripheral hemorehages</li><li>Bleeding gums</li><li>Osmotic diarrhea</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Fruits like-<ol><li>Citrus fruits</li><li>Papaya</li><li>Cantaloupe</li><li>Strawberies</li></ol></li><li>Vegetables like-<ol><li>Potatoes</li><li>Cabbage</li></ol></li></ul>`;
    }
    if(dis=="Vitamin D")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:(Rickets)</strong><br>
        <ul><li>Costochondral beading</li><Epiphyseal</li><li>Cranial bossing</li><li>Bowed legs</li><li>Persistently open anterior fontanelle</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Egg yolk</li><li>fatty fish</li><li>Sunlight-activation of 7-dehydrocholesterol in the skin</li></ul>`;
    }
    if(dis=="Vitamin E")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Hemolytic anemia in the premature and newborn</li><li>Hyporeflexia</li><li>Spinocerebellar</li><li>Retinal degeneration</li></ul><br>
        <strong>FOOD RESOURCE TO OVRCOME IT:</strong><br>
        <ul><li>Vegetable oils</li><li>Liver</li><li>Egg yolk</li><li>Butter</li><li>Green leafy vegetables</li><li>Whole-grain breads</li><li>Cereals</li><li>Other fortified / enriched grain products</li><li>Wheat germ</li></ul>`;
    }
    if(dis=="Vitamin K")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Prolonged bleeding and prothrombin time</li><li>Hemorrhagic manifestations(especially for newborn babies)</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Vegetables oils</li><li>Green leafy vegetables</li><li>Pork</li><li>Liver</li></ul>`;
    }
    if(dis=="Calcium")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:(Rickets)</strong><br>
        <ul><li>Abnormal development of bones</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCEME IT:</strong><br>
        <ul><li>Yogurt</li><li>Cheese</li><li>Fortified / enriched grain products</li><li>Green leafy vegetables like-<ol><li>Collards</li><li>Kale mustard greens</li><li>Turnip greens</li></ol></li><li>Tofu(if made with calcium sulfate)</li><li>Sardines</li><li>Salmon</li></ul>`;
    }
    if(dis=="Iron")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Hypochromic microcytic anemia</li><li>Malabsorption</li><li>Irritability</li><li>Anorexia</li><li>Pallor</li><li>Lethargy</li></ul>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Meat</li><li>Liver</li><li>Legumes</li><li>Whole-grain Breads</li><li>Cereal</li><li>Fortified/enriched grain products</li><li>Dark green vegetables</li></ul>`;
    }
    if(dis=="Zinc")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Decreased wound healing</li><li>Hypogonadism</li><li>Mild anemia</li><li>Decreased taste acuity</li><li>Hair loss</li><li>Diarrhea</li><li>Growt failure</li><li>Skin changes</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Liver</li><li>Egg Yolk</li><li>Oysters & other seafood</li><li>Whole-grain breads</li><li>Cereals and othe fortifies/enriched grain products</li><li>Legumes</li></ul>`;
    }
    if(dis=="Potassium")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Muscle weakness</li><li>Decreased intestinal tone</li><li>Distention</li><li>Cardiac arrhythmias</li><li>Respiratory failure</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Fruits mainly-<ol><li>Orange juice</li><li>Bananas</li><li>Dried fruits</li></ol></li><li>Yogurt</li><li>Potatoes</li><li>Meat</li><li>Fish</li><li>Soy products</li><li>Vegetables</li></ul>`;
    }
    if(dis=="Sodium")
    {
        document.getElementById("display").innerHTML=`<strong>SYMPTOMS:</strong><br>
        <ul><li>Nausea</li><li>Cramps</li><li>Vomiting</li><li>Dizziness</li><li>Myopathy</li><li>Exhaustion</li><li>Possible repiratory failure</li></ul><br>
        <strong>FOOD RESOURCE TO OVERCOME IT:</strong><br>
        <ul><li>Sodium chloride(table salt)</li><li>Abundant in most foods except fruit</li></ul>`;
    }
}