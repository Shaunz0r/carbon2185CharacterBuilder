using System;
using System.Collections.Generic;
using System.Text;

namespace Carbon2185CharacterCreator
{
    class Armor
    {
        public string Name
        { get; set; }
        public string Type
        { get; set; }
        public string Price
        { get; set; }
        public string AC
        { get; set; }
        public string StrengthReq
        { get; set; }
        public string StealthDisadvantage
        { get; set; }
        public string DamageResistance
        { get; set; }
        public string Weight
        { get; set; }
        public Armor(string name, string type, string price, string ac, string strReq, string stealthDis, string dmgRes, string weight)
        {
            Name = name;
            Type = type;
            Price = price;
            AC = ac;
            StrengthReq = strReq;
            StealthDisadvantage = stealthDis;
            DamageResistance = dmgRes;
            Weight = weight;
        }
        //logs string of armor stats
        public string Prettify()
        {
            {
                return $"{Type} armor: {Name}, {Price}, AC {AC}+Dex, {StrengthReq} Strength required, Stealth {StealthDisadvantage}, DR {DamageResistance}, {Weight} lbs ";
            }
        }


    }
}
