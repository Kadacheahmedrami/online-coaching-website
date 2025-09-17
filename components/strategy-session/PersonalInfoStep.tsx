"use client"

import type React from "react"
import { User, Mail, Phone, Loader2, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface Country {
  code: string;
  country: string;
  }


interface PersonalInfoStepProps {
  formData: {
   firstName: string
   lastName: string
   email: string
   phone: string
   countryCode: string
   age: string
  }
  validationErrors: {
   email: string
   phone: string
   age: string
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCountryCodeChange: (countryCode: string) => void
   currentStep: number
}

interface Country {
  code: string
  country: string
  flag: string
  countryCode?: string
}

export default function PersonalInfoStep({
  formData,
  validationErrors,
  onInputChange,
  onCountryCodeChange,
  currentStep
}: PersonalInfoStepProps) {
  const [countries, setCountries] = useState<Country[]>([])
  const [loadingCountries, setLoadingCountries] = useState(true)
  const [countrySearch, setCountrySearch] = useState("")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [selectedCountryDisplay, setSelectedCountryDisplay] = useState("🇺🇸 +1 United States")

  // Function to convert country code to flag emoji
  const countryCodeToFlag = (countryCode: string): string => {
    if (!countryCode || countryCode.length !== 2) return '🏳️'
    
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0))
    
    return String.fromCodePoint(...codePoints)
  }

  // Manual flag mapping for better reliability
  const getFlagEmoji = (countryCode: string): string => {
    const flagMap: { [key: string]: string } = {
      'AD': '🇦🇩', 'AE': '🇦🇪', 'AF': '🇦🇫', 'AG': '🇦🇬', 'AI': '🇦🇮', 'AL': '🇦🇱', 'AM': '🇦🇲',
      'AO': '🇦🇴', 'AQ': '🇦🇶', 'AR': '🇦🇷', 'AS': '🇦🇸', 'AT': '🇦🇹', 'AU': '🇦🇺', 'AW': '🇦🇼',
      'AX': '🇦🇽', 'AZ': '🇦🇿', 'BA': '🇧🇦', 'BB': '🇧🇧', 'BD': '🇧🇩', 'BE': '🇧🇪', 'BF': '🇧🇫',
      'BG': '🇧🇬', 'BH': '🇧🇭', 'BI': '🇧🇮', 'BJ': '🇧🇯', 'BL': '🇧🇱', 'BM': '🇧🇲', 'BN': '🇧🇳',
      'BO': '🇧🇴', 'BQ': '🇧🇶', 'BR': '🇧🇷', 'BS': '🇧🇸', 'BT': '🇧🇹', 'BV': '🇧🇻', 'BW': '🇧🇼',
      'BY': '🇧🇾', 'BZ': '🇧🇿', 'CA': '🇨🇦', 'CC': '🇨🇨', 'CD': '🇨🇩', 'CF': '🇨🇫', 'CG': '🇨🇬',
      'CH': '🇨🇭', 'CI': '🇨🇮', 'CK': '🇨🇰', 'CL': '🇨🇱', 'CM': '🇨🇲', 'CN': '🇨🇳', 'CO': '🇨🇴',
      'CR': '🇨🇷', 'CU': '🇨🇺', 'CV': '🇨🇻', 'CW': '🇨🇼', 'CX': '🇨🇽', 'CY': '🇨🇾', 'CZ': '🇨🇿',
      'DE': '🇩🇪', 'DJ': '🇩🇯', 'DK': '🇩🇰', 'DM': '🇩🇲', 'DO': '🇩🇴', 'DZ': '🇩🇿', 'EC': '🇪🇨',
      'EE': '🇪🇪', 'EG': '🇪🇬', 'EH': '🇪🇭', 'ER': '🇪🇷', 'ES': '🇪🇸', 'ET': '🇪🇹', 'FI': '🇫🇮',
      'FJ': '🇫🇯', 'FK': '🇫🇰', 'FM': '🇫🇲', 'FO': '🇫🇴', 'FR': '🇫🇷', 'GA': '🇬🇦', 'GB': '🇬🇧',
      'GD': '🇬🇩', 'GE': '🇬🇪', 'GF': '🇬🇫', 'GG': '🇬🇬', 'GH': '🇬🇭', 'GI': '🇬🇮', 'GL': '🇬🇱',
      'GM': '🇬🇲', 'GN': '🇬🇳', 'GP': '🇬🇵', 'GQ': '🇬🇶', 'GR': '🇬🇷', 'GS': '🇬🇸', 'GT': '🇬🇹',
      'GU': '🇬🇺', 'GW': '🇬🇼', 'GY': '🇬🇾', 'HK': '🇭🇰', 'HM': '🇭🇲', 'HN': '🇭🇳', 'HR': '🇭🇷',
      'HT': '🇭🇹', 'HU': '🇭🇺', 'ID': '🇮🇩', 'IE': '🇮🇪', 'IL': '🇮🇱', 'IM': '🇮🇲', 'IN': '🇮🇳',
      'IO': '🇮🇴', 'IQ': '🇮🇶', 'IR': '🇮🇷', 'IS': '🇮🇸', 'IT': '🇮🇹', 'JE': '🇯🇪', 'JM': '🇯🇲',
      'JO': '🇯🇴', 'JP': '🇯🇵', 'KE': '🇰🇪', 'KG': '🇰🇬', 'KH': '🇰🇭', 'KI': '🇰🇮', 'KM': '🇰🇲',
      'KN': '🇰🇳', 'KP': '🇰🇵', 'KR': '🇰🇷', 'KW': '🇰🇼', 'KY': '🇰🇾', 'KZ': '🇰🇿', 'LA': '🇱🇦',
      'LB': '🇱🇧', 'LC': '🇱🇨', 'LI': '🇱🇮', 'LK': '🇱🇰', 'LR': '🇱🇷', 'LS': '🇱🇸', 'LT': '🇱🇹',
      'LU': '🇱🇺', 'LV': '🇱🇻', 'LY': '🇱🇾', 'MA': '🇲🇦', 'MC': '🇲🇨', 'MD': '🇲🇩', 'ME': '🇲🇪',
      'MF': '🇲🇫', 'MG': '🇲🇬', 'MH': '🇲🇭', 'MK': '🇲🇰', 'ML': '🇲🇱', 'MM': '🇲🇲', 'MN': '🇲🇳',
      'MO': '🇲🇴', 'MP': '🇲🇵', 'MQ': '🇲🇶', 'MR': '🇲🇷', 'MS': '🇲🇸', 'MT': '🇲🇹', 'MU': '🇲🇺',
      'MV': '🇲🇻', 'MW': '🇲🇼', 'MX': '🇲🇽', 'MY': '🇲🇾', 'MZ': '🇲🇿', 'NA': '🇳🇦', 'NC': '🇳🇨',
      'NE': '🇳🇪', 'NF': '🇳🇫', 'NG': '🇳🇬', 'NI': '🇳🇮', 'NL': '🇳🇱', 'NO': '🇳🇴', 'NP': '🇳🇵',
      'NR': '🇳🇷', 'NU': '🇳🇺', 'NZ': '🇳🇿', 'OM': '🇴🇲', 'PA': '🇵🇦', 'PE': '🇵🇪', 'PF': '🇵🇫',
      'PG': '🇵🇬', 'PH': '🇵🇭', 'PK': '🇵🇰', 'PL': '🇵🇱', 'PM': '🇵🇲', 'PN': '🇵🇳', 'PR': '🇵🇷',
      'PS': '🇵🇸', 'PT': '🇵🇹', 'PW': '🇵🇼', 'PY': '🇵🇾', 'QA': '🇶🇦', 'RE': '🇷🇪', 'RO': '🇷🇴',
      'RS': '🇷🇸', 'RU': '🇷🇺', 'RW': '🇷🇼', 'SA': '🇸🇦', 'SB': '🇸🇧', 'SC': '🇸🇨', 'SD': '🇸🇩',
      'SE': '🇸🇪', 'SG': '🇸🇬', 'SH': '🇸🇭', 'SI': '🇸🇮', 'SJ': '🇸🇯', 'SK': '🇸🇰', 'SL': '🇸🇱',
      'SM': '🇸🇲', 'SN': '🇸🇳', 'SO': '🇸🇴', 'SR': '🇸🇷', 'SS': '🇸🇸', 'ST': '🇸🇹', 'SV': '🇸🇻',
      'SX': '🇸🇽', 'SY': '🇸🇾', 'SZ': '🇸🇿', 'TC': '🇹🇨', 'TD': '🇹🇩', 'TF': '🇹🇫', 'TG': '🇹🇬',
      'TH': '🇹🇭', 'TJ': '🇹🇯', 'TK': '🇹🇰', 'TL': '🇹🇱', 'TM': '🇹🇲', 'TN': '🇹🇳', 'TO': '🇹🇴',
      'TR': '🇹🇷', 'TT': '🇹🇹', 'TV': '🇹🇻', 'TW': '🇹🇼', 'TZ': '🇹🇿', 'UA': '🇺🇦', 'UG': '🇺🇬',
      'UM': '🇺🇲', 'US': '🇺🇸', 'UY': '🇺🇾', 'UZ': '🇺🇿', 'VA': '🇻🇦', 'VC': '🇻🇨', 'VE': '🇻🇪',
      'VG': '🇻🇬', 'VI': '🇻🇮', 'VN': '🇻🇳', 'VU': '🇻🇺', 'WF': '🇼🇫', 'WS': '🇼🇸', 'YE': '🇾🇪',
      'YT': '🇾🇹', 'ZA': '🇿🇦', 'ZM': '🇿🇲', 'ZW': '🇿🇼'
    }
    
    return flagMap[countryCode.toUpperCase()] || countryCodeToFlag(countryCode)
  }

  // Load countries from REST Countries API
  const loadCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flag,idd,cca2')
      const data = await response.json()
      
      const countryList = data
        .filter((country: any) => country.idd?.root && country.idd?.suffixes?.length > 0)
        .map((country: any) => {
          const root = country.idd.root
          const suffix = country.idd.suffixes[0]
          const dialCode = root + (suffix || '')
          
          // Prioritize the flag from API, fallback to generated flag emoji
          let flagEmoji = country.flag
          if (!flagEmoji && country.cca2) {
            flagEmoji = getFlagEmoji(country.cca2)
          }
          
          return {
            code: dialCode,
            country: country.name.common,
            flag: flagEmoji || getFlagEmoji(country.cca2) || '🏳️',
            countryCode: country.cca2
          }
        })
        .sort((a: any, b: any) => a.country.localeCompare(b.country))
      
      const uniqueCountries = countryList.filter((country: Country, index: number, self: Country[]) => 
        index === self.findIndex((c: Country) => c.code === country.code && c.country === country.country)
      )
      
      setCountries(uniqueCountries)
      setFilteredCountries(uniqueCountries)
      
      const defaultCountry = uniqueCountries.find(
        (c: Country) => c.code === "+1" && c.country.includes("United States")
      );

      if (defaultCountry) {
        setSelectedCountryDisplay(`${defaultCountry.flag} ${defaultCountry.code} ${defaultCountry.country}`)
      }
    } catch (error) {
      console.error('Failed to load countries:', error)
      // Enhanced fallback countries with proper flag emojis
      const fallbackCountries = [
        { code: "+1", country: "United States", flag: "🇺🇸", countryCode: "US" },
        { code: "+1", country: "Canada", flag: "🇨🇦", countryCode: "CA" },
        { code: "+44", country: "United Kingdom", flag: "🇬🇧", countryCode: "GB" },
        { code: "+33", country: "France", flag: "🇫🇷", countryCode: "FR" },
        { code: "+49", country: "Germany", flag: "🇩🇪", countryCode: "DE" },
        { code: "+39", country: "Italy", flag: "🇮🇹", countryCode: "IT" },
        { code: "+34", country: "Spain", flag: "🇪🇸", countryCode: "ES" },
        { code: "+86", country: "China", flag: "🇨🇳", countryCode: "CN" },
        { code: "+91", country: "India", flag: "🇮🇳", countryCode: "IN" },
        { code: "+81", country: "Japan", flag: "🇯🇵", countryCode: "JP" },
        { code: "+61", country: "Australia", flag: "🇦🇺", countryCode: "AU" },
        { code: "+55", country: "Brazil", flag: "🇧🇷", countryCode: "BR" },
        { code: "+213", country: "Algeria", flag: "🇩🇿", countryCode: "DZ" }
      ]
      setCountries(fallbackCountries)
      setFilteredCountries(fallbackCountries)
      setSelectedCountryDisplay("🇺🇸 +1 United States")
    } finally {
      setLoadingCountries(false)
    }
  }

  useEffect(() => {
    loadCountries()
  }, [])

  useEffect(() => {
    if (!countrySearch) {
      setFilteredCountries(countries)
    } else {
      const filtered = countries.filter(country => 
        country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.code.includes(countrySearch)
      )
      setFilteredCountries(filtered)
    }
  }, [countrySearch, countries])

  const handleCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(e.target.value)
    setShowCountryDropdown(true)
  }

  const handleCountrySelect = (country: Country) => {
    onCountryCodeChange(country.code)
    setSelectedCountryDisplay(`${country.flag} ${country.code} ${country.country}`)
    setCountrySearch("")
    setShowCountryDropdown(false)
  }

  const getFullPhoneNumber = () => {
    return formData.countryCode + formData.phone
  }

  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <User className="w-12 h-12 text-accent mx-auto" />
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <p className="text-muted-foreground">Let's start with the basics</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="John"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="age" className="text-sm font-medium">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={onInputChange}
            className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
              validationErrors.age ? 'border-red-500' : 'border-border'
            }`}
            placeholder="25"
            min="16"
            max="100"
          />
          {validationErrors.age && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.age}</p>
          )}
        </div>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <Mail className="w-12 h-12 text-accent mx-auto" />
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-muted-foreground">How can we reach you?</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                validationErrors.email ? 'border-red-500' : 'border-border'
              }`}
              placeholder="john.doe@example.com"
            />
            {validationErrors.email && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative w-full sm:w-auto">
                {loadingCountries ? (
                  <div className="w-full sm:w-48 px-3 py-3 border border-border rounded-lg bg-background flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">Loading countries...</span>
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      type="text"
                      value={showCountryDropdown ? countrySearch : ""}
                      onChange={handleCountrySearch}
                      onFocus={() => setShowCountryDropdown(true)}
                      placeholder={selectedCountryDisplay}
                      className="w-full sm:w-52 px-3 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm cursor-pointer overflow-hidden"
                      style={{ textOverflow: 'ellipsis' }}
                    />
                    
                    <div 
                      className="absolute inset-y-0 right-2 flex items-center pointer-events-none"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    >
                      <ArrowRight className={`w-3 h-3 transition-transform text-muted-foreground ${
                        showCountryDropdown ? 'rotate-90' : 'rotate-90'
                      }`} />
                    </div>
                    
                    {showCountryDropdown && (
                      <div className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto border border-border rounded-lg bg-background shadow-lg">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <button
                              key={`${country.code}-${country.country}-${index}`}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className="w-full px-3 py-2 text-left hover:bg-accent/10 focus:bg-accent/10 focus:outline-none text-sm flex items-center gap-2 border-b border-border last:border-b-0"
                            >
                              <span className="text-lg flex-shrink-0" role="img" aria-label={`${country.country} flag`}>
                                {country.flag}
                              </span>
                              <span className="font-medium text-accent flex-shrink-0">{country.code}</span>
                              <span className="text-foreground flex-1 truncate">{country.country}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-sm text-muted-foreground">
                            No countries found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {showCountryDropdown && (
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowCountryDropdown(false)}
                  />
                )}
              </div>
              
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className={`w-full flex-1 px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                  validationErrors.phone ? 'border-red-500' : 'border-border'
                }`}
                placeholder="123456789"
              />
            </div>
            {validationErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Select your country and enter your phone number (without country code)
            </p>
            <div className="text-xs text-muted-foreground bg-muted p-2 rounded flex flex-wrap items-center gap-1">
              <strong>Full number:</strong> 
              <span className="flex items-center gap-1 break-all">
                {countries.find(c => c.code === formData.countryCode)?.flag && (
                  <span className="text-sm flex-shrink-0">
                    {countries.find(c => c.code === formData.countryCode)?.flag}
                  </span>
                )}
                <span className="break-all">
                  {getFullPhoneNumber() || formData.countryCode + "..."}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}