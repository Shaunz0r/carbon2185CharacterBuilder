using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;

namespace Carbon2185CharacterCreator
{
    public class Weapon
    {
        public string Name
        { get; set; }
        public string Price
        { get; set; }
        public string Damage
        { get; set; }
        public string DamageType
        { get; set; }
        public string Range
        { get; set; }
        public string Ammo
        { get; set; }
        public string Properties
        { get; set; }
        public string Weight
        { get; set; }
       
        public Weapon(string name, string price, string damage, string damageType, string range, string ammo, string properties, string weight)
        {
            Name = name;
            Price = price;
            Damage = damage;
            DamageType = damageType;
            Range = range;
            Ammo = ammo;
            Properties = properties;
            Weight = weight;
        }

        //return string of weapon stats
        public string Prettify()
        { if (Range.Equals(true))
            {
                return $"{Name}, {Damage} {DamageType} damage, Range: {Range}, Ammo: {Ammo}, Properties: {Properties}, Weight: {Weight} lbs";
            }
            else
            {
                return $"{Name}, {Damage} {DamageType} damage, Properties: {Properties}, Weight: {Weight} lbs";
            }
        }
    }
}
