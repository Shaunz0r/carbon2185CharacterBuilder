using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;

namespace Carbon2185CharacterCreator
{
    class ArmorLibrary
    {
        public ArmorLibrary()
        {
            string line;
            List<Armor> allArmor = new List<Armor>();
            FileStream armorCSV = new FileStream("../../Resources/Carbon2185Armor.csv", FileMode.Open);
            StreamReader streamReader = new StreamReader(armorCSV);
            line = streamReader.ReadLine();
            while ((line = streamReader.ReadLine()) != null)
            {
                string[] armorBuilder = line.Split(",");
                Armor newArmor = new Armor(armorBuilder[0], armorBuilder[1], armorBuilder[2], armorBuilder[3], armorBuilder[4], armorBuilder[5], armorBuilder[6], armorBuilder[7]);
                allArmor.Add(newArmor);
            }
            Console.WriteLine("Armor:");
            foreach (Armor armor in allArmor)
            {
                Console.WriteLine(armor.Prettify());
            }
            streamReader.Close();
        }
    }
}
