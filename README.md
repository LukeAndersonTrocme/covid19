# Visualizing the Covid-19 pandemic with doubling rates

In this github repository we provide the methods, data and R scripts necessary to reproduce our work published in Significance magazine.

link to article : https://www.significancemagazine.com/science/676-visualizing-the-covid-19-pandemic-with-doubling-rates

![Doubling_rate](https://github.com/LukeAndersonTrocme/covid19-doubling-rates/blob/master/figures/figure1.jpg?raw=true)

# Methods 

We focus on eight countries (New Zealand, Singapore, South Korea, Japan, Canada, Brazil, Italy and the United States) to provide some global context to the results. These countries were selected to provide examples of the upper and lower bounds of the range of responses and testing strategies. 

International Coronavirus testing results are from Our World in Data (Max Roser and Hasell, 2020). This dataset is updated regularly and includes the cumulative number of infections, the cumulative total number of tests and the cumulative total number of deaths. 

The government policy stringency index is from the Oxford Coronavirus Government Response Tracker (Hale and Kira, 2020). This project tracks government responses to the Coronavirus pandemic using publicly available indicators like school closures and restrictions in movement. 

Mobility trends are from the Google Mobility Reports. The data used in this article were downloaded on May 26th 2020. Google releases aggregated mobility data from countries on a regular basis. These metrics report changes in movement trends for a number of categories like workplace and residential activity. We limited our analysis to residential activity to provide some insight to how policy translate into changes in behaviours (Figure 1C). 

To measure how the number of new reported cases changes over time we use a constant growth model. While the true nature of the growth dynamics of a viral outbreak are complex, simple models often provide useful approximations. We used the change in cumulative confirmed cases over time to measure the growth rate and doubling rates (Figure 1B). Where the growth rate is the percent chance in daily cases and doubling rate is the number of days for the number of confirmed infections to double in size. 

![double_rate_methods](https://github.com/LukeAndersonTrocme/covid19-doubling-rates/blob/master/figures/dt_methods.png?raw=true)


# Canadian Data Viz 

![Covid19 in Canada](https://github.com/LukeAndersonTrocme/covid19-doubling-rates/blob/master/figures/Ontario_Covid_April-22-2020_summary.jpg?raw=true)

# Data Resources : 

### Canada : 
https://health-infobase.canada.ca/src/data/covidLive/covid19.csv

### Ontario :
https://data.ontario.ca/dataset/confirmed-positive-cases-of-covid-19-in-ontario/resource/455fd63b-603d-4608-8216-7d8647f43350

### Quebec : 
https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/

## About Me :
I am a PhD Student at McGill University studying Statistical Population Genomics. Always interested in collaborating on (un)related projects.

Linked In : https://www.linkedin.com/in/luke-anderson-trocme/

Twitter : https://twitter.com/LukeAnderTroc

I am not an epidemiologist or a doctor, please be diligent about conclusions drawn from these figures.
